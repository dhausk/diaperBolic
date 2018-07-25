import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class DiaperBolic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "kaylee",
      babyName: "Ellis",
      type: 1
    }
  }

  submitDiaper = () =>{

  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>DiaperBolic Changing of the under pants form</Text>
        <View style={styles.inputContainer}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
            <Picker.Item label="Wet" value="1" />
            <Picker.Item label="Soildish" value="2" />
          </Picker>
        </View>
        <Button
          onPress={submitDiaper}
          margin='10'
          title="Sign UP"
          color="#007C5C"
          accessibilityLabel="Submit a Diaper"
        />
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
  },
  title: {
    color: 'white',
    flex: 4,
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  },
  inputContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007C5C',
    width: "60%",
    padding: 10
  }
 
});

export default DiaperBolic;