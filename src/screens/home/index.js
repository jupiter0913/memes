import React, { Component } from 'react';

import MetroTabs from '../../components/MetroTabs';
import TrendingScreen from './trending';
import MyFeedScreen from './myfeed';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import Style from './style';
import Share_Style from '../../theme/style';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Share_Style.header_style}>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/menu.png')} style={Share_Style.icon_style} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/bell.png')} style={Share_Style.icon_style} />
          </TouchableOpacity>
        </View>
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