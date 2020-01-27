import React, { Component } from 'react';

import MetroTabs from '../../components/MetroTabs';
import TrendingScreen from './trending';
import MyFeedScreen from './myfeed';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Style from './style';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  // };
  // const {navigate} = this.props;
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.title_view}>
          <Text style={Style.title_text}>Home</Text>
        </View>
        <MetroTabs
          screens={[
            { key: '1', title: 'Trending', screen: <TrendingScreen navigation={this.props.navigation}/> },
            { key: '2', title: 'My feed', screen: <MyFeedScreen /> },
          ]}
        />
      </View>
    );
  }
}