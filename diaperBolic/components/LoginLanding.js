import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const LoginLanding = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title} >DiaperBolic</Text>

      <Text style={styles.welcome}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#656472',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  },
  welcome: {
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