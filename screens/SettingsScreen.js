import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View,  } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { setIntervals } from '../redux/actions'
import ApplyButton from '../components/ApplyButton';
import Inputs from '../components/Inputs';
import styles from '../stylesheet/inputs';
import { Formik } from 'formik';

//TODO: export variables from inputs to Timer component
class SettingsScreen extends Component {
  onApply() {
    alert('Apply btn')
  }

  render() {
    return (
      <Container>

        <ScrollView style={{flex: 1, margin: 0}}>
          
            <Formik
              initialValues={{ test: '', sets: '1' }}
              onSubmit={values => console.log(values)}
            >
              {props => (
                <View>
                  <View>
                  <Text style={styles.labels}>
                    SETS
                  </Text>
                </View>
                <TextInput
                  keyboardType={'numeric'}
                  style={styles.inputs}
                  value={props.values.sets}
                  />
                  <TextInput
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.test}
                  />
                  <Inputs></Inputs>
                  <ApplyButton
                    {...this.props}
                      onPress={props.handleSubmit}  
                    >
                      Apply
                  </ApplyButton>
                </View>
              )}
            </Formik>
         
        </ScrollView>
       
         
        
      </Container>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    intervals: state.intervals
  }
}

const mapDispatchToProps = dispatch => ({
  setIntervals: settings => dispatch(setIntervals(settings))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
