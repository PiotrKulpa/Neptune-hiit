import React, { Component } from 'react';
import { Text, View, Animated, Easing, Vibration } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../stylesheet/timer';
import MainButton from '../components/MainButton';
import { Font, SQLite, Audio } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { NavigationEvents } from 'react-navigation';
import Done from './Done';


//TODO:
// load sound

//const soundObject = new Expo.Audio.Sound();
//soundObject.loadAsync(require('../assets/sounds/beep.mp3')).then(sound => console.log(sound));



const db = SQLite.openDatabase('results');

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    n: 0,
    timerAnim: new Animated.Value(100), //value for timer arc animation
    counter: 0,
    fontsLoaded: false,
    duration: this.props.intervals[0], // durations in seconds
    wellDone: false,
    isTimerRun: false,
  }

  onLoadSound = async () => {

    const soundObject = new Expo.Audio.Sound();
   
      try {
        await soundObject.loadAsync(require('../assets/sounds/beep.mp3'));
      { shouldPlay: true }
        this.audioPlayer1  = soundObject;
          this.audioPlayer1.playAsync();
          this.audioPlayer1.setPositionAsync(0);
          this.audioPlayer1.setRateAsync(3, false);
       // Your sound is playing!
      } catch (error) {
      // An error occurred!
      console.log(error);
      
      } 
  }

  async componentWillMount(){
    
    try{
      await Expo.Audio.setIsEnabledAsync(true);
    } catch(error) {console.log(error);}
  }

  componentDidMount() {

    //load custom fonts
    Font.loadAsync({
      'sans-pro-light': require('../assets/fonts/SourceSansPro-Light.ttf'),
    }).then(() => this.setState({ fontsLoaded: true }));

    // create sql table results if not exist
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists intervals (id integer primary key not null, date text, sets int, value int);'
      );
    });

  }

  


  onStart = () => {
    this.onLoadSound();
    // reset timer
    this.state.timerAnim.resetAnimation();
    // reset counter
    let n = 0;
    //reset value to 100
    this.state.timerAnim._value = 100;
    // add listener
    this.state.timerAnim.addListener(({ value }) => {
      this._value = value;
      // round value to integral
      this.setState({ counter: parseInt(value) });

      // reset animation
      if (value === 0) {
        this.state.timerAnim.resetAnimation();
        this.onLoadSound();

        // methods after all sets finished
        if (n === this.props.intervals.length - 1) {
          Vibration.vibrate([0, 100, 200, 100, 200, 100]);
          this.onLoadSound();
          this.state.timerAnim.removeAllListeners();
          n = 0;
          this.state.timerAnim._value = 0;
          this.setState({
            duration: 0,
            wellDone: true,
            isTimerRun: false,
          });
          this.writeToDB();
          return;
        };
        n++;
        this.setState({ duration: this.props.intervals[n] }, this.onAnimate(n));
      };
    });

    this.setState({
      duration: this.props.intervals[0],
      wellDone: false,
      isTimerRun: true,
    }, this.onAnimate(n));
  }

  onReset = () => {
    // reset timer
    this.state.timerAnim.resetAnimation();
    this.state.timerAnim.removeAllListeners();
    this.state.timerAnim._value = 100;
    this.setState({
      duration: this.props.intervals[0],
      wellDone: false,
    })
  }

  onAnimate(n) {
    const { intervals } = this.props;
    Vibration.vibrate(500);

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
    if (!this.state.isTimerRun) {
      this.setState({
        duration: this.props.intervals[0],
      });
    }
  }

  writeToDB() {
    // get all data to write to DB
    let hiitDate = new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString(),
      hiitSets = this.props.intervals.length / 2,
      hiitTime = this.props.intervals.reduce((partial_sum, a) => partial_sum + a, 0);
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
                  <View style={!this.state.wellDone ? { display: 'flex' } : { display: 'none' }}>
                    <Text style={{ fontSize: 68, color: "#35e3ee", textAlign: 'center' }}>{timerTime}</Text>
                    <Text style={{ fontSize: 22, color: "white", }}>{'to Complete'}</Text>
                  </View>
                  <View style={this.state.wellDone ? { display: 'flex' } : { display: 'none' }}>
                    {this.state.wellDone && <Done />}

                    <Text style={{ fontSize: 22, color: "white", }}>{'Well Done!'}</Text>
                  </View>
                </ProgressCircle>
              </Animated.View>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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