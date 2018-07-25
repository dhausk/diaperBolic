import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';
import { Text } from 'react-native-elements';
import { VictoryPie, VictoryContainer } from "victory-native";
import { Actions } from '../node_modules/react-native-router-flux';

// const baseUrl = "https://diaperss.herokuapp.com/api/diapers/";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "kaylee",
      babyName: this.props.upperState.babyName,
    }
  }
  countBrown (diapers){
    var dirt = diapers.filter(diaper =>{
      return diaper.type == 2 ;
    })
    return dirt.length;
  }
  countYellow (diapers){
    var wet = diapers.filter(diaper => {
      return diaper.type == 1;
    })
    return wet.length;
  }
  diaperTypes(dataDiapers){
    var solids = this.countBrown(dataDiapers);
    var wet = this.countYellow(dataDiapers);
    return [{x:1, y:wet, label:`${wet} Wet`}, {w:2, y:solids, label:`${solids} Poops`}]
  }
  componentDidMount=()=>{
    Actions.refresh
  }
  render() {
    const user = this.props.upperState.userName
    const baby = this.props.upperState.babyName
    let data = this.diaperTypes(this.props.upperState.diaperData)
       
    return (
      <ScrollView style={styles.container}>
      <View style={styles.titleCont }>
        {/* <Text h2>Welcome back {user}</Text>   */}
          <View style={styles.title} >
            <Text style={{ color: "white", margin: 10, marginTop: 30 }} h4>Welcome back</Text>
            <Text style={{ color: "white", marginTop: 5 }} h4>kaylee</Text> 
          </View>
          <Image style={styles.logo} source={require('../assets/splash.png')} />
      </View>
        <View style={styles.userInfo}>          
          <Text style={styles.userInfotext} h3>Baby {baby}</Text>
        </View>
        <View style={styles.userInfo}>  
          <Text style={styles.infoText} >{baby} has created {this.props.upperState.diaperData.length} dirty diapers.</Text>
          <Text style={styles.infoText} >You have reached the status of Celebrated pooper</Text>
            <VictoryPie
            colorScale={["blue","green"]}
            width={350}
            data={data}
            labelRadius={50}
            style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
            />
        </View>
      </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#656472',
  },
  header:{
      margin: 10,
      color: 'white',
      fontSize: 20,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textShadowColor: '#252525',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 15
  },
  titleCont:{
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    marginTop:25
  },
  title:{
    flexDirection:"column",
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInfo:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfotext:{
    color: 'white',
    margin:20
  },
  infoText: {
    color: 'white',
    fontSize:15
  },
  logo: {
    height: 150,
    width: 150
  }
});

export default Dash;