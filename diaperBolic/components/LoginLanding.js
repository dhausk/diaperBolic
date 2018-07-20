import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginLanding extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* <View style={styles.titleContainer}>
          <Text style={styles.title}>DiaperBolic</Text>
        </View>
         */}
          <Text style={styles.login}>
            Login
          </Text>
          
        
  
        <Text
          style={styles.link}
          onPress={() => Actions.SignUp()}
        >
          Don't have an Account? SignUp Here
        </Text>
  
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
  titleContainer: {
    flex: 1
  },
  title: {
    color: 'white',
    flex: 4,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  },
  loginContainer: {
    flex: 3
  },
  login: {
    color: 'white',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',

  },
  link: {
    fontSize: 12,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  }
});

export default LoginLanding;