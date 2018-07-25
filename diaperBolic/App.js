import React, { Component } from 'react';
import {
  StyleSheet, Text
} from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginLanding from './components/LoginLanding';
import SignUp from './components/SignUp';
import Dash from './components/Dash';
import AddDiaper from './components/AddDiaper';
import EditDiaper from './components/EditDiaper';
import DiaperBolic from './components/DiaperBolic';
const baseUrl = `https://diaperss.herokuapp.com/api/diapers/kaylee`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn : false,
      userName : "",
      diaperData:[],
      babyName:""
    }
  }
  userIsLoggedIn = (userName) => {
    this.setState({
      loggedIn:true,
      userName: userName
    })   
    this.userIsSet(userName)
  }

  userIsSet = (user) => {
    
    fetch(baseUrl)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          diaperData: res.diapers,
          babyName: res.diapers[0].babyName
        })
      }).then(Actions.Dash())
      .catch((error) => {
        console.error(error);
      });; 
  }
  addADiaper = (diaperSub) => {
    
    fetch(baseUrl, {
      method: 'POST',
      body: JSON.stringify( diaperSub ),
      headers: new Headers({ "Content-Type": "application/json" })
    })
      .then(res => res.json())
      .then(res => {
        let curDiapers = this.state.diaperData
        curDiapers.push(res)
        this.setState({
          diaperData: curDiapers
        })
      })
      .then(Actions.Dash())
      .catch(err => {
        console.error(err)
      })
  }

  render() {
      return (
        <Router >
          <Scene key="root"  >
            <Scene key="LoginLanding"
              component={() => <LoginLanding userIsLoggedIn={this.userIsLoggedIn} />}
            />
            <Scene key="SignUp" 
              component={() => <SignUp userIsLoggedIn={this.userIsLoggedIn} />}
            />
            <Scene key='tab-bar' tabBarStyle={{ backgroundColor: '#f2f2f2' }} 
              tabs 
              modal 
              tabBarPosition="bottom" 
              hideBackImage={true}
            >
              <Scene key="DashBoard" hideNavBar name='DashBoard' title="DashBoard">
                <Scene key="Dash"
                  name="Dash"
                  title="DiaberBolic"
                  component={() => <Dash upperState={this.state} />}
                />
                
                
              </Scene>
              <Scene key="DiaperBolic"  hideNavBar name='DiaperBolic' title="DiaperBolic">
                <Scene key="Dash"
                  name="Dash"
                  title="DiaberBolic"
                  component={() => <DiaperBolic upperState={this.state} />}
                />
                <Scene key="Edit" name='Edit' title="EditDiaper" component={EditDiaper} />
              </Scene>
              <Scene key="AddDiaper" hideNavBar name='AddDiaper' title="Add a Diaper">
                <Scene key="addDiaper" hideNavBar name='addDiaper' title="addDiaper" 
                component={()=><AddDiaper addADiaper={this.addADiaper} />} />

              </Scene>
            </Scene>

           
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