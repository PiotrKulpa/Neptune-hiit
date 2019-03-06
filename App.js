import React from 'react';
import { StyleSheet, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { TabNavigator } from './config/navConfig';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers);
const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>    
    );
  }
}

const styles = StyleSheet.create({
  
});
