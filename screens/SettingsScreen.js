import React, { Component } from 'react';
import { Text, ScrollView, TextInput, View,  } from 'react-native';
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
    
  }

  onChangeSets(value) {
    console.log('sets have changed:' + value);
    let setsNumber = Number(value),
        newSet = [];

        // TODO: zmień na metode niemutującą tablicy

        for(i = 0; i < setsNumber; i++) {
          newSet.push({active: '30', rest: '30'});
        }


    this.setState({sets: newSet});


    
  }

  onActiveInputChange(value, i) {
    // pobiera pozycje obiektu z tablicy
    // uaktualnia wartość active
    // waliduj input, spróbuj zamienić na liczbę, jeśli się nie uda
    // Number() deaktywuj przycisk apply
    // TODO exclude none
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

    //console.log(this.state.sets)
    }
  }

  onRestInputChange(value, i) {
    // pobiera pozycje obiektu z tablicy
    // uaktualnia wartość rest
    console.log(value, i);
    console.log(this.state.sets)
  }

  render() {
    return (
      <Container>

        <ScrollView style={{flex: 1, margin: 0}}>
          
            <Formik
              initialValues={{ test: '', sets: '1' }}
              onSubmit={values => console.log(values)}
            >
              {props => (
                <View>
                  <View>
                  <Text style={styles.labels}>
                    SETS
                  </Text>
                </View>
                <TextInput
                  keyboardType={'numeric'}
                  style={styles.inputs}
                  defaultValue={props.values.sets}
                  onChangeText={value => this.onChangeSets(value)}
                  />
                  {/* <TextInput
                    onChangeText={props.handleChange('email')}
                    onBlur={props.handleBlur('email')}
                    value={props.values.test}
                  /> */}
                  {this.state.sets.map((el, i) => 
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
                </View>
              )}
            </Formik>
         
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
