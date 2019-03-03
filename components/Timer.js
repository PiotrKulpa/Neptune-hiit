import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';

export default class Timer extends Component {
  
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
                <Text style={{ fontSize: 68, color: "#35e3ee" }}>{'93'}</Text>
                <Text style={{ fontSize: 22, color: "white" }}>{'to Complete'}</Text>
            </ProgressCircle>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <MainButton >
            <Text>START</Text>
          </MainButton>
          <MainButton>
            <Text>RESET</Text>
          </MainButton>
        </View>

      </View>
    )
  }
}
