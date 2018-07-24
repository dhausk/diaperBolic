import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginLanding from './components/LoginLanding';
import SignUp from './components/SignUp';
import Dash from './components/Dash';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn : false,
      userName : ""
    }
  }
  userIsLoggedIn = (userName) => {
    ()=>Actions.Dash();
    this.setState({
      userName: userName
    })    
  }
  render() {

      return (
        <Router>
          <Scene key="root">
            <Scene key="LoginLanding"
              component={() => <LoginLanding userIsLoggedIn={this.userIsLoggedIn} />}
              title="DiaperBolic Login"
            />
            <Scene key="SignUp" component={() => <SignUp userIsLoggedIn={this.userIsLoggedIn} />}title="SignUp" />
            <Scene
              key="Dash"
              name="Dash"
              component={() => <Dash user={()=>{this.state.userName}} />}
              title="DashBoard"
            />
          </Scene>
        </Router>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#656472',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


      // {/* <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View> */}