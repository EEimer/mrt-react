import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import Header from "./src/components/Header"
import RigList from "./src/components/RigList"

export default class mrt extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={"Headline"} />
        <RigList />
      </View>
    );
  }
}



AppRegistry.registerComponent('mrt', () => mrt);
