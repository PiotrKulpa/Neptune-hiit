import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';

export default class Done extends Component {
  render() {
    return (
      <View>
        <Animatable.View animation={this.props.type}>
          <FontAwesome style={{textAlign: 'center'}} name="check-circle" size={92} color="#35e3ee" />
        </Animatable.View>     
      </View>
    )
  }
}
