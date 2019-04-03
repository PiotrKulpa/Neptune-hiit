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

  state = {
    sets: [{active: '30', rest: '30'}]
  }

  onApply() {
    alert('Apply btn')
  }

  onActiveInputChange(value, i) {
    // pobiera pozycje obiektu z tablicy
    // uaktualnia wartość active
    // waliduj input, spróbuj zamienić na liczbę, jeśli się nie uda
    // Number() deaktywuj przycisk apply
    console.log(value, i);
  }

  onRestInputChange(i) {
    // pobiera pozycje obiektu z tablicy
    // uaktualnia wartość rest
    alert(i);
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
                  defaultValue={props.values.sets}
                  onChange={this.onApply}
                  />
                  {/* <TextInput
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.test}
                  /> */}
                  {this.state.sets.map((el, i) => 
                    <View key={i}>
                      <View>
                        <Text style={styles.labels}>ACTIVE INTERVAL {i}</Text>
                        <TextInput
                            keyboardType={'numeric'}
                            style={styles.inputs}
                            defaultValue={el.active}
                            onChangeText={(value)=> this.onActiveInputChange(value, i)}
                        >
                        </TextInput>
                      </View>
                      <View>
                        <Text style={styles.labels}>REST INTERVAL</Text>
                        <TextInput
                            keyboardType={'numeric'}
                            style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, color: 'white'}}
                            defaultValue={el.rest}
                        >
                        </TextInput>
                      </View>
                    </View>
                  )}
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
  //console.log(state)
  return {
    intervals: state.intervals
  }
}

const mapDispatchToProps = dispatch => ({
  setIntervals: settings => dispatch(setIntervals(settings))
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
