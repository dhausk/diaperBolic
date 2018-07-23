import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Login from './components/LoginLanding';
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
    ()=>Actions.DashBoard();
    this.setState({
      userName: userName
    })    
  }
  render() {

      return (
        <Router>
          <Scene key="root">
            <Scene Key="Login"
              component={Login}
              title="Login"
            />
            <Scene key="SignUp" component={SignUp} title="SignUp" />
            <Scene
              Key="Dash"
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