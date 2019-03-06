import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';

//TODO: export variables from inputs to Timer component
class SettingsScreen extends Component {
  render() {
    return (
      <Container>
        <Text> Settings</Text>
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
export default connect(mapStateToProps)(SettingsScreen);
