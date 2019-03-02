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
};

export const TabNavigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);