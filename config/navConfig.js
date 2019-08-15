import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TimerScreen from '../screens/TimerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
// import { Constants } from 'expo';
import Constants from 'expo-constants';

const RouteConfigs = {
  Timer: { screen: TimerScreen },
  Setting: { screen: SettingsScreen },
  Stats: { screen: StatisticsScreen },
};

const TabNavigatorConfig = {
  tabBarPosition: 'top',
  initialRouteName: 'Timer',
  swipeEnabled: true,
  tabBarOptions: {
    style: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: Constants.statusBarHeight + 0,
      height: 50,
      zIndex: 99,
      elevation: 0,       //remove shadow on Android
      shadowOpacity: 0,
      padding: 0,
      margin: 0,
    },
    inactiveTintColor: 'rgba(66,93,155,0.5)',
    labelStyle: {
      fontSize: 25,
    },
    tabStyle: {
      borderWidth: 0,
      shadowColor: 'transparent',
      padding: 0,
      margin: 0,
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0
    },
    showLabel: true
  }
};

export const TabNavigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);