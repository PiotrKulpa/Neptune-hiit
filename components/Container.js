import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import imageBack from '../assets/images/background.jpg';

//TODO: add background, logo, images, and basic layout
//use BackgroundImage to add bg image
export default class Container extends Component {
  render() {
    return (
      <View>
        <ImageBackground 
          source={imageBack} 
          style={{width: '100%', height: '100%'}}
        >
          {this.props.children}
        </ImageBackground>
      </View>
    )
  }
}
