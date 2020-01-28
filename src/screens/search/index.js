import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Item, Form, Input } from 'native-base';
import { RNChipView } from "react-native-chip-view";

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
          <Text style={Style.title_text}>Explore</Text>
        </View>
        <View style={Style.text_input_view}>
          <Form>
            <Item style={Style.text_input} >
              <Input placeholder="Search Dopameme" placeholderTextColor='#545d7e' style={Style.text_input_style} />
            </Item>
          </Form>
        </View>
        <View style={[Style.title_view, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={[Style.title_text, { marginLeft: 20 }]}>My Tags</Text>
          <TouchableOpacity onPress={this.gotoSignup} transparent>
            <Text style={[Style.see_text, { marginRight: 20 }]}>See all 13 ></Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={[Style.tag_view, { marginLeft: 20 }]}>
            <RNChipView
              title='Modi'
              titleStyle={Style.tag_style}
              backgroundColor="#242e52"
              avatar={false}
            />
          </View>
          <View style={Style.tag_view}>
            <RNChipView
              title='Rahul G'
              titleStyle={Style.tag_style}
              backgroundColor="#242e52"
              avatar={false}
            />
          </View>
          <View style={Style.tag_view}>
            <RNChipView
              title='Arnab'
              titleStyle={Style.tag_style}
              backgroundColor="#242e52"
              avatar={false}
            />
          </View>
        </View>
        <View style={[Style.title_view, { flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={[Style.title_text, { marginLeft: 20 }]}>Suggestions</Text>
          <TouchableOpacity onPress={this.gotoSignup} transparent>
            <Text style={[Style.see_text, { marginRight: 20 }]}>See all ></Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: width, height: height - 370, marginTop: 10, justifyContent: 'center' }}>
          <ScrollView>
            <View style={{ flexDirection: 'row' }}>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>Kejriwal</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13_ek1.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>CID</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13_ek2.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>Big Bos</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13_ek3.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>Khawal</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13_ek4.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>Jalal Uddin</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
              <View style={Style.card_view}>
                <Image source={require('../../assets/images/mask_group_13_ek5.png')} style={Style.avatar_image_view} />
                <Text style={Style.name_text}>Jamil Khan</Text>
                <TouchableOpacity style={Style.follow_button}><Text style={Style.follow_button_text}>Follow</Text></TouchableOpacity>
                <Text style={Style.post_text}>200 Post</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={Style.round_view}>
          <TouchableOpacity style={Style.round_button}>
            <Text style={Style.add_text_style}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}