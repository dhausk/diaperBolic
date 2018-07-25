import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput
} from 'react-native';
import { Text, Button } from 'react-native-elements';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      pW: "",
      email: ""
    }
  }
  
  nextScene = () => {
    this.props.userIsLoggedIn(this.state.userName)
   }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/splash.png')}/>
        <Text style={styles.login} h2 >Please Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.loginForm}
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            value={this.state.email}
            selectTextOnFocus={true}
            returnKeyType="next"
            accessibilityLabel="Email input"
            maxLength={30}
          />
        </View>
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
          onPress={ this.nextScene }
          title="Sign UP"
          backgroundColor="#007C5C"
          accessibilityLabel="Click her to Sign up."
          large
          raised 
        />
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
  inputContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007C5C',
    width: "60%",
    padding: 10
  },
  loginForm: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    width: "99%",
    textAlign: "center"
  },
  login: {
    margin: 10,
    color: 'white',
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
  },
  logo:{
    height:150,
    width:150
  }
});

export default SignUp;