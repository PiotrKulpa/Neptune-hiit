import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from '../stylesheet/inputs';

export default class Inputs extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.labels}>ACTIVE INTERVAL</Text>
          <TextInput
              keyboardType={'numeric'}
              style={styles.inputs}
          >
          </TextInput>
        </View>
        <View>
          <Text style={styles.labels}>REST INTERVAL</Text>
          <TextInput
              keyboardType={'numeric'}
              style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, color: 'white'}}
          >
          </TextInput>
        </View>
      </View>
    )
  }
}
