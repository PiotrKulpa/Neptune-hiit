import React from 'react';
import { StyleSheet, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { TabNavigator } from './config/navConfig';


const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />    
    );
  }
}

const styles = StyleSheet.create({
  
});
