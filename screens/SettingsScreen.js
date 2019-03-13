import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View,  } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { setIntervals } from '../redux/actions'
import ApplyButton from '../components/ApplyButton';
import Inputs from '../components/Inputs';
import styles from '../stylesheet/inputs';

//TODO: export variables from inputs to Timer component
class SettingsScreen extends Component {
  onApply() {
    alert('Apply btn')
  }

  render() {
    return (
      <Container>

        <ScrollView style={{flex: 1, margin: 0}}>
          <View>
            <Text style={styles.labels}>
              SETS
            </Text>
          </View>
          <TextInput
            keyboardType={'numeric'}
            style={styles.inputs}
            />
          <Inputs></Inputs>
        </ScrollView>
       
          <ApplyButton
          {...this.props}
            onPress={this.onApply}  
          >
            Apply
          </ApplyButton>
        
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
