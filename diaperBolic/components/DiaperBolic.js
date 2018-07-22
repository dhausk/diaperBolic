import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class DiaperBolic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>DiaperBolic</Text>
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

export default DiaperBolic;