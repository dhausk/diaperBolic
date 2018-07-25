import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { VictoryLine, VictoryChart, VictoryLabel } from "victory-native";
import { Text, Card, Button } from 'react-native-elements';

class DiaperBolic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diapers: this.props.upperState.diaperData
     }
  }
 
  setUpData = () =>{
    return [
      { x: 1, y: 1 }, 
      { x: 4, y: 3 }, 
      { x: 8, y: 2 },
      { x: 11, y: 4 },
      { x: 13, y: 5 },
      { x: 14, y: 3 },
      { x: 17, y: 4 },
      { x: 22, y: 3 },
      { x: 23, y: 1 }
    ]
  }
  nextScene(){
    Actions.Edit();
  }
  deleteDiaper(id) {
    Alert.alert(
      'You sure you want to Delete',
      'This Diaper',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
    const curDiapers = this.state.diapers;

    console.log(id)
    // const URL = `https://diaperss.herokuapp.com/api/diapers/`;
    // fetch(URL + id, {
    //   method: 'DELETE'
    // })
    //   .then(res => res.json())
    //   .then(res => {
    //     console.log(res)
    //     return res
    //   })
    //   .then(

    //   )
  }

  render() {
    const diapers = this.props.upperState.diaperData

    const data = this.setUpData()
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> The DiaperBolic Curve</Text>
        <VictoryChart style={{ parent: { backgroundColor: "#007C5C" } }} >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31", fill: "#007C5C"  },
              parent: { border: "1px solid #ccc" }
            }}
            data={data}
          />
        </VictoryChart>
        {
          diapers.map((diap, i) => (
            
            <View key={i}>
              <Card key={i} title="Dirty diaper" >
                <Text>Type of Dirty Diaper: {(diap.type == 2) ? "Poops" : "Wet"}</Text>
                <Button 
                  onPress={this.nextScene}
                  title="Edit"
                  backgroundColor="#007C5C"
                  accessibilityLabel="Edit Diaper"
                  raised
                />
                <Button
                  onPress={()=>{this.deleteDiaper(diapers._id)}}
                  title="Delete"
                  backgroundColor="#007C5C"
                  accessibilityLabel="Delete"
                  raised
                />
              </Card>
            </View>
          ))
        }
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#656472',
    padding:10
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
  cards: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007C5C',
    width: "60%",
    padding: 10
  }
});

export default DiaperBolic;