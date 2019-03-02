import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import TimerScreen from '../screens/TimerScreen';
import SettingsScreen from '../screens/SettingsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

const RouteConfigs = {
  Timer: { screen: TimerScreen },
  Setting: { screen: SettingsScreen },
  Stats: { screen: StatisticsScreen },
};

const TabNavigatorConfig = {
  tabBarPosition: 'top',
  initialRouteName: 'Timer',
  tabBarOptions: {
    style: {
      backgroundColor: 'transparent',
      borderWidth: 0,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 40,
      height: 50,
      zIndex: 99,
      elevation: 0,       //remove shadow on Android
      shadowOpacity: 0,
    },
    inactiveTintColor: 'rgba(66,93,155,0.5)',
    labelStyle: {
      fontSize: 22,
    },
    tabStyle: {
      borderWidth: 0,
      shadowColor: 'transparent'
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0
    },
    showLabel: true
  }
};

export const TabNavigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);