import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default class Timer extends Component {
  render() {
    return (
      <View>
        <View style={{ borderColor: '#4664a6',borderWidth: 1, padding: 30, borderRadius: 200}}>
          <View style={{ borderColor: '#4664a6',borderWidth: 1, padding: 30, borderRadius: 200}}>
            <ProgressCircle
                percent={30}
                radius={120}
                borderWidth={8}
                color="#35e3ee"
                shadowColor="#1d305b"
                bgColor="#304876"
            >
                <Text style={{ fontSize: 68, color: "#35e3ee" }}>{'93'}</Text>
                <Text style={{ fontSize: 22, color: "#35e3ee" }}>{'to Complete'}</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
    )
  }
}
