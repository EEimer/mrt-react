import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import Header from "./src/components/Header"
import AccountDetail from "./src/components/AccountDetail";

export default class mrt extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={"Headline"} />
        <AccountDetail />
      </View>
    );
  }
}



AppRegistry.registerComponent('mrt', () => mrt);
