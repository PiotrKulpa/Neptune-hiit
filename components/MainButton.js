import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../stylesheet/mainButton';

const MainButton = props => {
  return (
    <View>
      <TouchableWithoutFeedback
      >
        <View style={styles.btnBg}>
          {props.children}
        </View>
      </TouchableWithoutFeedback>
      
    </View>
  )
}

export default MainButton
