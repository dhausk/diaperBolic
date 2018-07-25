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
      userName: "",
      babyName:"",
      timeStamp:"",
      type:1
    }
  }
submitDiaper (){
  // fetch(url)
  //   .then(res => res.json())
  //   .then(res => console.log(res) )

  Actions.DashBoard();
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
          onPress={this.submitDiaper}
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
  },
  loginForm: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    width: "99%",
    textAlign: "center"
  },
  login: {
    margin: 10,
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  },
  link: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15
  }
});

export default DiaperBolic;