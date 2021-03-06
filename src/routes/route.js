import React from 'react';
import { Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

import SplashScreen from "../screens/splash";
import LoginScreen from "../screens/login/login";
import SignupScreen from "../screens/login/signup";
import CreateMemeScreen from '../screens/profile/create_meme';
import CreateMemeDetailScreen from '../screens/profile/create_meme_detail';

import HomeScreen from '../screens/home';
import HomeDetailScreen from '../screens/home/home_detail'
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          tintColor == '#47e7d6' ? <Image source={require('../assets/icons/home_active.png')} style={{ width: 42, height: 48 }} />
            : <Image source={require('../assets/icons/home_inactive.png')} style={{ width: 42, height: 48 }} />
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          tintColor == '#47e7d6' ? <Image source={require('../assets/icons/explore_active.png')} style={{ width: 42, height: 48 }} />
            : <Image source={require('../assets/icons/explore_inactive.png')} style={{ width: 42, height: 48 }} />
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ horizontal, tintColor }) =>
          tintColor == '#47e7d6' ? <Image source={require('../assets/icons/profile_active.png')} style={{ width: 42, height: 48 }} />
            : <Image source={require('../assets/icons/profile_inactive.png')} style={{ width: 42, height: 48 }} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#47e7d6',
      inactiveTintColor: '#757d94',
      showIcon: true,
      showLabel: false,
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
  App: AppNavigator,
  CreateMeme: CreateMemeScreen,
  CreateMemeDetail: CreateMemeDetailScreen,
  HomeDetail: HomeDetailScreen
});

const AppContainer = createAppContainer(InitialNavigator);

export default AppContainer;