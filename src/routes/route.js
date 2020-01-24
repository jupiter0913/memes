import React from 'react';
import { Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/login/login";
import SignupScreen from "../screens/login/signup";

import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="search" size={horizontal ? 20 : 25} color={tintColor} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          <Icon name="user" size={horizontal ? 20 : 25} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#47e7d6',
      inactiveTintColor: '#757d94',
      showIcon: true,
      style: {
        backgroundColor: '#1c254c'
      }
    }
  }
);

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

export default AppContainer;