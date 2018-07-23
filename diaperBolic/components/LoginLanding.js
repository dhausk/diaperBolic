import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class LoginLanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pW:""
    }
  }
  nextScene(){
    console.log('pressed');
    
    Actions.Dash()
  }

  render(){
    
    const user= this.state.userName

    return (
      <View style={styles.container}>
        <Text style={styles.login}>Please Login</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.loginForm}
            onChangeText={(userName) => this.setState({ userName })}
            placeholder="User Name"
            value={this.state.userName}
            selectTextOnFocus={true}
            returnKeyType="next"
            accessibilityLabel="User name input"
            maxLength={30}
            />

        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.loginForm}
            onChangeText={(pW) => this.setState({ pW })}
            placeholder="Pass Word"
            value={this.state.pW}
            secureTextEntry={true}
            accessibilityLabel="password input"
            maxLength={30} />
        </View>
        
        <Button
          onPress={() => Actions.SignUp() }
          margin='10'
          title="Login"
          color="#007C5C"
          accessibilityLabel="Click her to login in."
        />
        
  
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
  inputContainer:{
    margin:10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007C5C',
    width: "60%",
    padding:10
  },
  loginForm:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1 ,
    backgroundColor: 'white',
    width: "99%",
    textAlign:"center"
  },
  login: {
    margin:10,
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  },
  link: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  }
});

export default LoginLanding;