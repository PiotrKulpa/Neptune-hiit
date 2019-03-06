import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import Timer from '../components/Timer';

export default class TimerScreen extends Component {
  render() {
    return (
        <Container>
          <Timer></Timer>
        </Container>
    )
  }
}
