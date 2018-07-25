import React, { Component } from 'react';
import { View} from 'react-native';
import { VictoryPie, VictoryContainer } from "victory-native";

class Chart extends Component {
  render(){
    return(
      
        <VictoryPie
          colorScale={["blue", "green"]}
          width={350}
          data={this.props.dataD}
          labelRadius={40}
          style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
        />
      
    )
  }

}
export default Chart