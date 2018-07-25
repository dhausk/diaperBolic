import React, { Component } from 'react';
import { View} from 'react-native';
import { VictoryPie, VictoryContainer } from "victory-native";

class Chart extends Component {
  render(){
    return(
      
        <VictoryPie
        colorScale={["#4396dc", "#007C5C"]}
          width={350}
          data={this.props.dataD}
          labelRadius={35}
          style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
        />
      
    )
  }

}
export default Chart