import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Container from '../components/Container';
import { NavigationEvents } from 'react-navigation';
import { SQLite } from 'expo';
import styles from '../stylesheet/stats';


//TODO: style table with resuslts

const db = SQLite.openDatabase('results');

export default class StatisticssScreen extends Component {

  state = {
    results: {}
  }

  onFocus = () => {
    
    db.transaction(tx => {
        tx.executeSql('select * from intervals order by date desc', [], (_, { rows }) =>
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
         <ScrollView style={styles.tableBox}>
         <View style={styles.tableHeader}>
            {/* <Text style={styles.tableTd}>Id:</Text> */}
            <Text style={[styles.tableTd, {flex: 4}]}>Date:</Text>
            <Text style={styles.tableTd}>Sets:</Text>
            <Text style={styles.tableTd}>Time:</Text>
          </View>
         
        {this.state.results._array && this.state.results._array.length > 0 ? 
          this.state.results._array.map(el =>  
            <View style={styles.tableRow} key={el.id}>
              {/* <Text style={styles.tableTd}>{el.id}</Text> */}
              <Text style={[styles.tableTd, {flex: 4}]}>{el.date}</Text>
              <Text style={styles.tableTd}>{el.sets}</Text>
              <Text style={styles.tableTd}>{el.value}</Text>
            </View>
           ) : 
          <Text>No stats</Text>  
        }
        </ScrollView>
      </Container>
    )
  }
}
