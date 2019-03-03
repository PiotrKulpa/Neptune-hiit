import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';
import { Font } from 'expo';

export default class Timer extends Component {

  componentDidMount() {
    Font.loadAsync({
      'sans-pro-light': require('../assets/fonts/SourceSansPro-Light.ttf'),
    });
  }
  
  onPressBtn() {
    alert('ok')
  }

  render() {
    return (
      <View>
        
        <View style={styles.ring}>
          <View style={styles.ring}>
            <ProgressCircle
                percent={30}
                radius={120}
                borderWidth={8}
                color="#35e3ee"
                shadowColor="#1d305b"
                bgColor="#304876"
            >
                <Text style={{ fontSize: 68, color: "#35e3ee", fontFamily: 'sans-pro-light' }}>{'93'}</Text>
                <Text style={{ fontSize: 22, color: "white", fontFamily: 'sans-pro-light' }}>{'to Complete'}</Text>
            </ProgressCircle>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <MainButton 
            onPress={this.onPressBtn}
          >
            <Text style={{ fontFamily: 'sans-pro-light' }}>START</Text>
          </MainButton>
          <MainButton>
            <Text style={{ fontFamily: 'sans-pro-light' }}>RESET</Text>
          </MainButton>
        </View>

      </View>
    )
  }
}
