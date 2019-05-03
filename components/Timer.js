import React, { Component } from 'react';
import { Text, View, Animated, Easing, } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';
import { Font, SQLite } from 'expo';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';


//TODO: style msg
// write record to db

const db = SQLite.openDatabase('results');

class Timer extends Component {

  state = {
    n: 0,
    timerAnim: new Animated.Value(100), //value for timer arc animation
    counter: 0,
    fontsLoaded: false,
    duration: this.props.intervals[0], // durations in seconds
    msg: '',
  }

  componentDidMount() {

    //load custom fonts
    Font.loadAsync({
      'sans-pro-light': require('../assets/fonts/SourceSansPro-Light.ttf'),
    }).then(() => this.setState({fontsLoaded: true}));

    // create sql table results if not exist
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists intervals (id integer primary key not null, date text, sets int, value int);'
      );
    });
    
    
  }

  
  onStart = () => {
    // reset timer
    this.state.timerAnim.resetAnimation();
    // reset counter
    let n = 0;
    //reset value to 100
    this.state.timerAnim._value = 100;
    // add listener
    this.state.timerAnim.addListener(({value}) => {
      this._value = value;
      // round value to integral
      this.setState({counter: parseInt(value)});

      // reset animation
      if(value === 0) {
        this.state.timerAnim.resetAnimation();

        // methods after all sets finished
        if(n === this.props.intervals.length -1) {
          this.state.timerAnim.removeAllListeners();
          n = 0;
          this.state.timerAnim._value = 0;
          this.setState({
            duration: 0,
            msg: 'Nice job! You have finished all intervals.'
          });
          //TODO write record to DB
          this.writeToDB();
          return;
        };
        n++;
        this.setState({duration: this.props.intervals[n]}, this.onAnimate(n));
      }; 
    });
    this.setState({
      duration: this.props.intervals[0],
      msg: '',
    }, this.onAnimate(n));
  }

  onReset = () => {
    // reset timer
    this.state.timerAnim.resetAnimation();
    this.state.timerAnim.removeAllListeners();
    this.state.timerAnim._value = 100;
    this.setState({
      duration: this.props.intervals[0],
      msg: '',
    })
  }

  onAnimate(n) {
    const {intervals} = this.props;
    
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

  onFocus = () => {
    this.setState({
      duration: this.props.intervals[0]
    });

    console.log(this.props.intervals[0]);
    
  }

  writeToDB() {
    // get all data to write to DB
    let hiitDate = new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
        hiitSets = this.props.intervals.length / 2,
        hiitTime = this.props.intervals.reduce((partial_sum, a) => partial_sum + a,0);
    // write data to DB
    db.transaction(tx => {
      tx.executeSql('insert into intervals (date, sets, value) values (?, ?, ?)', [hiitDate, hiitSets, hiitTime]);
    });
    
  }

  render() {
    let { timerAnim, duration } = this.state;
    // calculate seconds
    let timerTime = parseInt(timerAnim._value * duration / 100); 
    return (
        this.state.fontsLoaded ? (
      <View>
          <NavigationEvents
            onWillFocus={this.onFocus}
          />
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
        <View><Text>{this.state.msg}</Text></View>

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