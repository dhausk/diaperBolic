import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Text } from 'react-native-elements';


const baseUrl = "https://diaperss.herokuapp.com/api/diapers/";

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.user,
      diaperData:[]
    }
  }
  componentDidMount = ()=>{
    const diaperUrl = `${baseUrl}${this.state.userName}`
    fetch(diaperUrl)
      .then(res => res.json)
      .then(diaper => this.setState({diaperData : diaper.diapers}));
    console.log(this.state.diaperData);
    
  }

  render() {
    const userName = this.props.user

    return (
      <View style={styles.container}>
      <View style={styles.titleCont }>
        <Text h1>Welcome {userName}</Text>  
      </View>
        <View style={styles.userIinfo}>
          <Text style={styles.userIinfotext} h3>User Name: {userName} </Text>
          <Text style={styles.userIinfotext} h3>Baby</Text>
        </View>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

  },
  userIinfo:{

  },
  userIinfotext:{
    color: 'white'
  }
});

export default Dash;