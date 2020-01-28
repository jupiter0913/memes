import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Style from './style';
import Share_Style from '../../theme/style';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  gotoCreateMemeDetail = () => {
    this.props.navigation.navigate("CreateMemeDetail");
  }
  goBack = () => {
    this.props.navigation.navigate("Profile");
  };
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.title_view}>
          <Text style={Style.title_text}>Create Meme</Text>
        </View>
        <View style={Share_Style.header_style}>
          <TouchableOpacity transparent onPress={this.goBack}>
            <Image source={require('../../assets/icons/back.png')} style={Share_Style.icon_style} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Style.title_text}>Edit</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.retangleArea}>
          <Text style={Style.title_text}>Choose Option</Text>
          <TouchableOpacity style={Style.touch_button}>
            <Image source={require('../../assets/images/mask_group_13.png')} style={Style.upload_image_view} />
            <Text style={[Style.title_text, { color: '#53e1d5' }]}>Upload Photos</Text>
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginTop: 30 }}>
            <Text style={[Style.title_text, { color: '#3c4566' }]}>OR</Text>
          </View>
          <TouchableOpacity style={Style.touch_button}>
            <Image source={require('../../assets/images/mask_group_13.png')} style={Style.upload_image_view} />
            <Text style={Style.title_text}>Create New</Text>
          </TouchableOpacity>
          <Text style={[Style.title_text, { marginTop: 50 }]}>Instructions</Text>
          <Text style={Style.inst_cont_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et lore magna aliquyam erat, sed diam</Text>
        </View>
        <TouchableOpacity style={Style.round_next_button} onPress={this.gotoCreateMemeDetail}>
          <Text style={{ color: 'white', fontSize: 50, fontWeight: '100', marginTop: -20 }}>→</Text>
          {/* <Image source={require('../../assets/images/mask_group_13.png')} style={Style.next_image_view} /> */}
        </TouchableOpacity>
      </View >
    );
  }
}