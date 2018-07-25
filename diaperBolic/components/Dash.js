import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';
import { Text } from 'react-native-elements';
import { VictoryPie, VictoryContainer, VictoryTheme } from "victory-native";

// const baseUrl = "https://diaperss.herokuapp.com/api/diapers/kaylee";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user,
      babyName: "",
      diaperData:[]
    }
  }
  componentDidMount = () =>{
    // const diaperUrl = `${baseUrl}&{this.props.user}`
    const baseUrl = "https://diaperss.herokuapp.com/api/diapers/kaylee";
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) =>{ 
        this.setState({
          diaperData : res.diapers,
          babyName: res.diapers[0].babyName
        }) 
      }).catch((error) => {
        console.error(error);
      });;    

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
  diaperTypes(){
    const dataDiapers = this.state.diaperData;
    var solids = this.countBrown(dataDiapers);
    var wet = this.countYellow(dataDiapers);
    return [{x:1, y:wet, label:"Wet"}, {w:2, y:solids, label:"Dirty"}]
  }
  render() {
    const user = this.state.userName
    const baby = this.state.babyName
    const data = this.diaperTypes()
    console.log(data);
    
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
          <Text style={styles.infoText} >{baby} has created {this.state.diaperData.length} dirty diapers.</Text>
          <Text style={styles.infoText} >You have Reached the status of Celebrated pooper</Text>
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