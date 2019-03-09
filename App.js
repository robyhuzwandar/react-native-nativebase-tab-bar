import React from 'react';
import {View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Main from './src/Main';

const Navigator = createStackNavigator({
  Main : {
    screen: Main
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navigator/>
      </View>
    );
  }
}