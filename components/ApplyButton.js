import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../stylesheet/applyButton';
import { LinearGradient } from 'expo';

const ApplyButton = props => {
  return (
      <TouchableWithoutFeedback
      {...props}
      >
        <LinearGradient
         colors={[ '#00b4f3', '#41eded',]}
         start={[0.5, 1]}
         style={styles.applyBtnBg}
        >
          <Text style={styles.btnTxt}>
            {props.children}
          </Text>
          </LinearGradient>
      </TouchableWithoutFeedback>  
  )
}

export default ApplyButton;
