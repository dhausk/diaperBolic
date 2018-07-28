import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Alert,
  Image
} from 'react-native';
import { Text, Button, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

class EditDiaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.selectedDiap._id
      userName: "kaylee",
      babyName: "Ellis",
      type: 1,
      timeStamp: this.props.selectedDiap.timeStamp
    }
  }

  editADiaper = () => {
    Alert.alert(
      'You sure?',
      'Submit edit for this Diaper?',
      [
        { text: 'Cancel', onPress: () => Actions.DiaperBolic() },
        { text: 'OK', onPress: () => this.props.EditDiaper(this.state) },
      ],
      { cancelable: false }
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/splash.png')} />
        <Text style={styles.title}>Edit This Diaper</Text>
        <Card style={styles.inputContainer}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.type}
            onValueChange={(itemValue) => this.setState({ type: itemValue })}>
            <Picker.Item label="Number 1" value="1" />
            <Picker.Item label="Number 2" value="2" />
          </Picker>
          <Button
            onPress={this.editADiaper}
            margin='10'
            title="Add Diaper"
            color="#007C5C"
            accessibilityLabel="Change Diaper type"
          />
        </Card>
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
    margin: 10,
    color: 'white',
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
    padding: 10
  },
  picker: {
    margin: 10,
    height: 30,
    width: 200,
    color: "white",
    backgroundColor: "#00537a"
  },
  logo: {
    height: 150,
    width: 150
  }

});

export default EditDiaper;