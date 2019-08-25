import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from '../stylesheet/incDecButton';

const IncDecButton = props => {
  return (
      <TouchableWithoutFeedback
      
      {...props}
      >
        <View style={styles.applyBtnBg}>
          
            <Text style={styles.btnTxt}>
              {props.children}
            </Text>
        </View>
         
      </TouchableWithoutFeedback>  
  )
}

export default IncDecButton;
