import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import imageBack from '../assets/images/background.jpg';
import { AdMobBanner } from 'expo-ads-admob';
import styles from '../stylesheet/container';

export default class Container extends Component {

  bannerError = () => {
    console.log('An error');
    return;
  }

  render() {
    return (
        <ImageBackground 
          source={imageBack} 
          style={styles.wrapper}
        >
          <View style={styles.content}>
            {this.props.children}
          </View>
          <View style={{flexDirection: 'row',  alignSelf: 'center'}}>
            <AdMobBanner
              style={styles.addMob}
              bannerSize="smartBannerPortrait"
              adUnitID="ca-app-pub-5596351936987510/1475895321" // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              onDidFailToReceiveAdWithError={this.bannerError} 
            />
          </View>
        </ImageBackground>
    )
  }
}
