import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

class DiaperBolic extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
 
  setUpData = () =>{
    return [
      { x: 1, y: 1 }, 
      { x: 4, y: 3 }, 
      { x: 8, y: 2 },
      { x: 11, y: 4 },
      { x: 13, y: 5 },
      { x: 14, y: 3 },
      { x: 17, y: 2 },
      { x: 22, y: 3 },
      { x: 23, y: 1 }
    ]

  }

  render() {
    const data = this.setUpData()
    return (
      <View style={styles.container}>
        <Text style={styles.title}> The DiaperBolic Curve</Text>
        
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryLine Data={data} 
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid black" }
            }} />
        </VictoryChart>
        
        
        <View style={styles.cards}>
          
        </View>
      
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