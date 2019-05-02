import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Container from '../components/Container';
import { NavigationEvents } from 'react-navigation';
import { SQLite } from 'expo';

//TODO: style table with resuslts

const db = SQLite.openDatabase('results');

export default class StatisticssScreen extends Component {

  state = {
    results: {}
  }

  onFocus = () => {
    
    db.transaction(tx => {
        tx.executeSql('select * from intervals', [], (_, { rows }) =>
        { 
          this.setState({
            results: rows,
          }, console.log(this.state.results))  
        }
      );
    });  
    
  }

  render() {
    return (
      <Container>
        <NavigationEvents
            onWillFocus={this.onFocus}
          />
         <ScrollView>
         <View>
            <Text>Id:</Text>
            <Text>Date:</Text>
            <Text>Sets done:</Text>
            <Text>Time:</Text>
          </View>
         
        {this.state.results._array && this.state.results._array.length > 0 ? 
          this.state.results._array.map(el =>  
            <View key={el.id}>
              <Text>{el.id}</Text>
              <Text>{el.date}</Text>
              <Text>{el.sets}</Text>
              <Text>{el.value}</Text>
            </View>
           ) : 
          <Text>No stats</Text>  
        }
        </ScrollView>
      </Container>
    )
  }
}
