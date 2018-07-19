import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import LoginLanding from './components/LoginLanding';
import SignUp from './components/SignUp';
// import DashBoard from './components/DashBoard';

const tabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? "green" : "white" }}>{title}</Text>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            Key="Login"
            Component={LoginLanding}
            title="Login"
          />
          <Scene
            key="SignUp"
            Component={SignUp}
            title="SignUp"
          />

          {/* <Scene
            key="tabBar"
            tabs
            tabBarStyle={{ backgroundColor: "black" }}
          >
            <Scene key"Login" Title="Login" icon={tabIcon}>

          </Scene>
          <Scene key"signUp" Title="SignUp" icon={tabIcon}>

          </Scene> */}
          {/* </Scene> */}


        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


      // {/* <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View> */}