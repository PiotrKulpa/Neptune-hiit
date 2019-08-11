import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View, KeyboardAvoidingView, } from 'react-native';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { setIntervals } from '../redux/actions'
import ApplyButton from '../components/ApplyButton';
import IncDecButton from '../components/IncDecButton';
import Inputs from '../components/Inputs';
import styles from '../stylesheet/inputs';
import Done from '../components/Done';

class SettingsScreen extends Component {

  state = {
    sets: [{active: '5', rest: '5'},],
    setsNumber: 1,
    deactivate: false,
    settingsUpdated: false,
  }

  onApply() {
    let setsToNumbers = this.state.sets.map(el => {
      return [Number(el.active), Number(el.rest)];
    });

    let setsToArray = [].concat.apply([], setsToNumbers);
    this.props.setIntervals(setsToArray);

    //add somekind of popup
    this.setState({
      settingsUpdated: true,
    }, () => {
      setTimeout(() => {this.setState({settingsUpdated: false})}, 500)
      
    })
  }

  onAddSet() {
    this.setState(
      prevState => (
        {
          setsNumber: prevState.setsNumber + 1,
          sets: [...prevState.sets, {active: '30', rest: '30'}]
        })
      );   
  }

  onRemoveSet() {
    if(this.state.setsNumber > 1) {
      this.setState(
        prevState => (
          {
            setsNumber: prevState.setsNumber - 1,
            sets: [...prevState.sets.slice(0,-1)]
          }
        )
      ); 
    }  
  }

  onActiveInputChange(value, i) {
    let regex = /^[0-9]*$/g;
    if(value.match(regex)) {
    
    // 1. Make a shallow copy of the items
    let items = [...this.state.sets];
    
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[i]};
    
    // 3. Replace the property you're intested in
    item.active = value;
    console.log(item);
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[i] = item;
    // 5. Set the state to our new copy
    this.setState({sets: items});

    }
  }

  onRestInputChange(value, i) {
    let regex = /^[0-9]*$/g;
    if(value.match(regex)) {
    
    // 1. Make a shallow copy of the items
    let items = [...this.state.sets];
    
    // 2. Make a shallow copy of the item you want to mutate
    let item = {...items[i]};
    
    // 3. Replace the property you're intested in
    item.rest = value;
    console.log(item);
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[i] = item;
    // 5. Set the state to our new copy
    this.setState({sets: items});
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' enabled>
      <Container>
        
        <ScrollView>
        {/* <ScrollView contentContainerStyle={styles.setsBox}> */}
        
          <View style={styles.topWrapper}>
            <View style={styles.setsLabel}>
              <Text style={styles.labels}>
                SET(S): <Text style={{color: 'white'}}> {this.state.setsNumber}</Text>
              </Text>
            </View>
            <View style={styles.btnsLabel}>
              <IncDecButton
                onPress={()=> this.onAddSet()}
              >
              +
              </IncDecButton>
              <IncDecButton
                onPress={()=> this.onRemoveSet()}
              >
              -
              </IncDecButton>
            </View>
          </View>
            
            {this.state.sets && this.state.sets.map((el, i) => 
              <View style={styles.inputsContainer} key={i}>
                
                <View style={styles.inputsNumber}>
                  <View style={styles.inputsNumberTxtBorder}>
                    <Text style={styles.inputsNumberTxt}>
                      {i+1}
                    </Text>
                  </View>
                </View>
                <View style={styles.inputsRow}>
                  <View>
                    <Text style={styles.labels}>{i+1}: ACTIVE INTERVAL</Text>
                    <TextInput
                        style={styles.inputsActive}
                        keyboardType={'numeric'}
                        defaultValue={el.active}
                        onChangeText={(value)=> this.onActiveInputChange(value, i)}
                    >
                    </TextInput>
                  </View>
                  <View style={styles.inputRestBox}>
                    <Text style={styles.labels}>{i+1}: REST INTERVAL</Text>
                    <TextInput
                        style={styles.inputsRest}
                        keyboardType={'numeric'}
                        defaultValue={el.rest}
                        onChangeText={(value)=> this.onRestInputChange(value, i)}
                    >
                    </TextInput>
                  </View>
                </View>
              </View>
            )}
         
        </ScrollView>
        
        <ApplyButton
              {...this.props}
                onPress={() => this.onApply()} 
                disabled={this.state.deactivate} 
              >
                Apply
            </ApplyButton>
            <View style={{position: 'absolute', alignSelf: 'center'}}>
            {this.state.settingsUpdated && <Done type="bounceOut"/>}
            </View>
      </Container>
      </KeyboardAvoidingView>
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
