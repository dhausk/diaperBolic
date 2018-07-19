import React from 'react';
import {
  StyleSheet
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

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            Key="LoginLanding"
            component={LoginLanding}
            title="Login"
          />
          <Scene
            key="SignUp"
            component={SignUp}
            title="Sign Up"
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