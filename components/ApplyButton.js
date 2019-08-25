import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../stylesheet/applyButton';
import { LinearGradient } from 'expo-linear-gradient';

const ApplyButton = props => {
  return (
      <TouchableOpacity
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
      </TouchableOpacity>  
  )
}

export default ApplyButton;
