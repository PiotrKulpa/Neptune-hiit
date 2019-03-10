import React, { Component } from 'react';
import { Text, View, Animated, Easing, } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';
import { Font } from 'expo';
import { connect } from 'react-redux';

// TODO: add method to repeat timer x times
// import redux
// read intervals state
// read length of state
// reapeat timer x-length times
// change only duration based on array index
class Timer extends Component {

  

  state = {
    n: 0,
    timerAnim: new Animated.Value(100), //value for timer arc animation
    counter: 0,
    fontsLoaded: false,
    duration: this.props.intervals[0], // durations in seconds
  }

  componentDidMount() {
    Font.loadAsync({
      'sans-pro-light': require('../assets/fonts/SourceSansPro-Light.ttf'),
    }).then(() => this.setState({fontsLoaded: true}));
  }
  
  onStart = () => {
    // starts timer
    // pauses timer
    this.state.timerAnim.resetAnimation();
    let n = 0;
    this.state.timerAnim._value = 100;
    this.state.timerAnim.addListener(({value}) => {
      this._value = value;
      //console.log(value)
      this.setState({counter: parseInt(value)});
      
      if(value === 0) {
        this.state.timerAnim.resetAnimation();
        // methods after animation finish
        if(n === this.props.intervals.length -1) {
          this.state.timerAnim.removeAllListeners()
          n = 0;
          this.state.timerAnim._value = 0;
          this.setState({
            duration: 0,
          });
          return;
        };
        n++;
        this.setState({duration: this.props.intervals[n]}, this.onAnimate(n));
      }; 
    });
    this.setState({duration: this.props.intervals[0]}, this.onAnimate(n));
  }

  onReset = () => {
    // reset timer
    // this.state.timerAnim.stopAnimation()
    this.state.timerAnim.resetAnimation();
    this.state.timerAnim.removeAllListeners();
    this.state.timerAnim._value = 100;
    this.setState({duration: this.props.intervals[0]})
  }

  onAnimate(n) {
    const {intervals} = this.props;
    console.log('onAnimate: '+n);
    
      Animated.timing(                 
        this.state.timerAnim,            
        {
          toValue: 0,
          duration: this.props.intervals[n] * 1000,
          easing: Easing.linear,
          useNativeDriver: false,
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

const mapStateToProps = state => {
  return {
    intervals: state.intervals
  }
}
export default connect(mapStateToProps)(Timer);