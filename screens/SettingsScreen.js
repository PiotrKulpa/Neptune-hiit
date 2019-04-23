import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View, Button, } from 'react-native';
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
    sets: [{active: '30', rest: '30'}],
    setsNumber: 1,
    deactivate: false,
  }

  onApply() {
    console.log(this.state.sets);
    console.log(this.state.setsNumber)
    
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
      <Container>
        <ScrollView style={{flex: 1, margin: 0}}>
            <View style={styles.setsBox}>
              <View>
                <Text style={styles.labels}>
                  SET(S)
                </Text>
              </View>
            <Button
              onPress={()=> this.onAddSet()}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={()=> this.onRemoveSet()}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
            
            {this.state.sets && this.state.sets.map((el, i) => 
              <View key={i}>
                <View>
                  <Text style={styles.labels}>{i+1}: ACTIVE INTERVAL</Text>
                  <TextInput
                      keyboardType={'numeric'}
                      style={styles.inputs}
                      defaultValue={el.active}
                      onChangeText={(value)=> this.onActiveInputChange(value, i)}
                  >
                  </TextInput>
                </View>
                <View>
                  <Text style={styles.labels}>{i+1}: REST INTERVAL</Text>
                  <TextInput
                      keyboardType={'numeric'}
                      style={{height: 40, borderColor: 'gray', borderBottomWidth: 1, color: 'white'}}
                      defaultValue={el.rest}
                      onChangeText={(value)=> this.onRestInputChange(value, i)}
                  >
                  </TextInput>
                </View>
              </View>
            )}
            <ApplyButton
              {...this.props}
                onPress={() => this.onApply()} 
                disabled={this.state.deactivate} 
              >
                Apply
            </ApplyButton>
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
