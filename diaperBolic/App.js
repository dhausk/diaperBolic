import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';

import LoginLanding from './components/LoginLanding';
import SignUp from './components/SignUp';
import Dash from './components/Dash';
import AddDiaper from './components/AddDiaper';
import EditDiaper from './components/EditDiaper';
import DiaperBolic from './components/DiaperBolic';
const baseUrl = `https://diaperss.herokuapp.com/api/diapers/`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      loggedIn : false,
      userName : "",
      diaperData:[],
      babyName:"",
      selectedDiap:{}
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
    // const getUserDataUrl = baseUrl+userName
    const getUserDataUrl = baseUrl + "kaylee"
    fetch(getUserDataUrl)
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
  selectDiap = (diap)=>{
    this.setState({selectedDiap:diap})
  }

 
  EditADiaper= (diaperEdit)=>{
    EditUrl = baseUrl+diaperEdit._id
    fetch(EditUrl, {
      method: 'POST',
      body: JSON.stringify(diaperEdit),
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
      .then(Actions.DiaperBolic())
      .catch(err => {
        console.error(err)
      })
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
      .then(Actions.refresh({}))
      .catch(err => {
        console.error(err)
      })
  }
  render() {
    console.disableYellowBox = true; 
      return (
        <Router >
          <Scene key="root"  >
            <Scene key="LoginLanding"
              hideNavBar
              component={() => <LoginLanding userIsLoggedIn={this.userIsLoggedIn} />}
            />
            <Scene key="SignUp" 
              title="Back"
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
                <Scene key="DiaperBolic"
                  name="DiaperBolic"
                  title="DiaberBolic"
                  component={() => <DiaperBolic upperState={this.state} />}
                />
                <Scene key="Edit" name='Edit' hideNavBar={false}  
                component={()=> <EditDiaper selectedDiap={this.state.selectedDiap} EditDiaper={this.EditADiaper}/>}
                 title="Back" />
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
export default App;