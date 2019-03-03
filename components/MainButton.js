import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../stylesheet/mainButton';

const MainButton = props => {
  return (
      <TouchableWithoutFeedback
      >
        <View style={styles.btnBg}>
          <Text style={styles.btnTxt}>
            {props.children}
          </Text>
        </View>
      </TouchableWithoutFeedback>  
  )
}

export default MainButton
