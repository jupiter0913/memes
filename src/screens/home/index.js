import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TrendingScreen from './trending';
import MyFeedScreen from './myfeed';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const TabScreen = createMaterialTopTabNavigator(
  {
    Trending: { screen: TrendingScreen },
    MyFeed : { screen: MyFeedScreen },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#43e9d5',
      inactiveTintColor: '#8c91a4',
      style: {
        backgroundColor: '#000b38',
      },
      labelStyle: {
        fontSize: 26,
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#44e9d4',
        borderBottomWidth: 4,
      },
    },
  }
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#000b38',
      },
      headerTitleStyle: { textAlign: 'center',flex: 1, width: width },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  },
});
export default createAppContainer(App);