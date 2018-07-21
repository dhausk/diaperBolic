import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import LoginLanding from './components/LoginLanding';
import SignUp from './components/SignUp';
// import DashBoard from './components/DashBoard';

// const tabIcon = ({ selected, title }) => {
//   return (
//     <Text style={{ color: selected ? "green" : "white" }}>{title}</Text>
//   );
// }

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn : false,
      userName : ""
    }
  }
  userIsLoggedIn = (userName) => {
    this.setState({
      userName: userName,
      loggedIn: true
    })
    console.log("you did it "+ userName);
  }

  render() {

      return (
        <Router>
          <Scene key="root">
            <Scene
              Key="LoginLanding"
              component={() => <LoginLanding userIsLoggedIn={this.userIsLoggedIn} />}
              title="DiaperBolic Login"
            />
            <Scene
              key="SignUp"
              component={()=> <SignUp  userIsLoggedIn={this.userIsLoggedIn} />}
              title="Diaperbolic Sign Up"
            />
            <Scene
              Key="DashBoard"
              component={() => <DashBoard />}
              title={`Diaperbolic Dash Board ${this.state.userName}`}
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