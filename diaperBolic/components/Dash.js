import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:"",
      diaperData:[]
    }
  }
  componentDidMount = ()=>{
    console.log("hey dash " + this.props.user);
    
  }

  render() {
    const userName = this.props.user
    return (
      <View style={styles.container}>
        <Text
        >Welcome {userName}</Text>  
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
  }
});

export default Dash;