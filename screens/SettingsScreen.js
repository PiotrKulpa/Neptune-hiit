import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { setIntervals } from '../redux/actions'
import MainButton from '../components/MainButton';

//TODO: export variables from inputs to Timer component
class SettingsScreen extends Component {
  onApply() {
    alert('Apply btn')
  }

  render() {
    return (
      <Container>
        <Text> Settings</Text>
        <MainButton
          onPress={this.onApply}
        >
          Apply
        </MainButton>
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
