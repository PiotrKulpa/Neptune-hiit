import React, { Component } from 'react';
import { Text, View, Animated, Easing, } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';
import { Font } from 'expo';

class Timer extends Component {

  state = {
    timerAnim: new Animated.Value(100),
    counter: 0,
    fontsLoaded: false,
    duration: 5,
  }

  componentDidMount() {
    Font.loadAsync({
      'sans-pro-light': require('../assets/fonts/SourceSansPro-Light.ttf'),
    }).then(() => this.setState({fontsLoaded: true}));
  }
  
  onStart = () => {
    // starts timer
    // pauses timer
    this.state.timerAnim.addListener(({value}) => {
      this._value = value;
      this.setState({counter: parseInt(value)})
    });
    this.onAnimate();
  }

  onReset = () => {
    // reset timer
    // this.state.timerAnim.stopAnimation()
    this.state.timerAnim.resetAnimation()
    this.state.timerAnim.removeAllListeners()
  }

  onAnimate() {
    Animated.timing(                 
      this.state.timerAnim,            
      {
        toValue: 0,
        duration: this.state.duration * 1000,
        easing: Easing.inOut(Easing.linear),
        useNativeDriver: true,
        delay: 1000
      }
    ).start() 
   }

  render() {
    let { timerAnim, duration } = this.state;
    // calculate seconds
    let timerTime = parseInt(timerAnim._value * duration / 100) 
    return (
      
        this.state.fontsLoaded ? (
      <View>
        
        <View style={styles.ring}>
          <View style={styles.ring}>
            <Animated.View 
              style={{
                ...this.props.style,
              }}
            >
              <ProgressCircle
                  percent={timerAnim._value}
                  radius={120}
                  borderWidth={8}
                  color="#35e3ee"
                  shadowColor="#1d305b"
                  bgColor="#304876"
              >
                  <Text style={{ fontSize: 68, color: "#35e3ee", }}>{timerTime}</Text>
                  <Text style={{ fontSize: 22, color: "white", }}>{'to Complete'}</Text>
              </ProgressCircle>
            </Animated.View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <MainButton 
            onPress={this.onStart}
          >
            <Text style={{ fontFamily: 'sans-pro-light' }}>START</Text>
          </MainButton>
          <MainButton
            onPress={this.onReset}
          >
            <Text style={{ fontFamily: 'sans-pro-light' }}>RESET</Text>
          </MainButton>
        </View>

      </View>
        ) : null 
      
    )
  }
}

export default Timer;