import React, { Component } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import Container from '../components/Container';
import { NavigationEvents } from 'react-navigation';
import { SQLite } from 'expo';
import styles from '../stylesheet/stats';

const db = SQLite.openDatabase('results');

export default class StatisticssScreen extends Component {

  state = {
    results: {},
    showLoader: true,
  }

  onFocus = () => {
    this.setState({
      showLoader: true,
    }); 
    
    db.transaction(tx => {
        tx.executeSql('select * from intervals order by date desc', [], (_, { rows }) =>
        { 
          this.setState({
            results: rows,
            showLoader: false,
          });  
        }
      );
    });  
  }

  render() {
    return (
      <Container> 
        <ScrollView>   
        <View style={styles.tableHeader}>
          <Text style={[styles.tableTd, {flex: 4}]}>Date:</Text>
          <Text style={[styles.tableTd, {textAlign: 'center'}]}>Sets:</Text>
          <Text style={[styles.tableTd, {textAlign: 'center'}]}>Time:</Text>
        </View>
        {this.state.results._array && this.state.results._array.length > 0 ? 
          this.state.results._array.map(el =>  
            <View style={styles.tableRow} key={el.id}>
              <Text style={[styles.tableTd, {flex: 4}]}>{el.date}</Text>
              <Text style={[styles.tableTd, {textAlign: 'center'}]}>{el.sets}</Text>
              <Text style={[styles.tableTd, , {textAlign: 'center'}]}>{el.value}</Text>
            </View>
           ) : 
          <Text>No stats</Text>  
        }
        </ScrollView>
        <NavigationEvents
          onWillFocus={this.onFocus}
        />
         <ActivityIndicator 
          style={{position: 'absolute', top: '50%', alignSelf: 'center',}} 
          size="large" 
          color="#0000ff" 
          animating={this.state.showLoader} 
        />
      </Container>
    )
  }
}
