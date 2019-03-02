import React, { Component } from 'react';
import { Text, View } from 'react-native';

//TODO: add background, logo, images, and basic layout
export default class Container extends Component {
  render() {
    return (
      <View>
        {this.props.children}
      </View>
    )
  }
}
