import React, { Component } from 'react';
import { ScrollView, View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Item, Form, Input, Textarea } from 'native-base';
import { RNChipView } from "react-native-chip-view";

import Style from './style';

import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class App extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    super(props);
  };
  render() {
    return (
      <View style={Style.container}>
        <ScrollView>
          <View>
            <Image source={require('../../assets/images/mask_group_18.png')} style={{ position: 'absolute', top: 0, left: 0, width: width, height: 400, resizeMode: 'cover', }} />
            {/* <Image source={require('../../assets/images/mask_group_13.png')} style={Style.avatar_image_view} />
            <Image source={require('../../assets/images/mask_group_13.png')} style={Style.avatar_image_view} /> */}
          </View>
          <View style={Style.retangle_area_01}>
            <View style={Style.text_view}>
              <Text style={Style.title_text}>Add Title</Text>
            </View>
            <View style={Style.text_input_view}>
              <Form>
                <Item style={Style.text_input} >
                  <Input placeholder="Type here" placeholderTextColor='white' style={[Style.text_input_style, { height: 50 }]} />
                </Item>
              </Form>
            </View>
            <View style={Style.text_view}>
              <Text style={[Style.title_text]}>Add Descriptions</Text>
            </View>
            <View style={Style.text_input_view}>
              <Form>
                <Textarea rowSpan={5} bordered placeholder="Type here" onChangeText={message => this.setState({ message: message })} style={Style.text_input} />
              </Form>
            </View>
            <View style={Style.text_view}>
              <Text style={Style.title_text}>Add Tag</Text>
            </View>
            <View style={Style.text_input_view}>
              <Form>
                <Item style={Style.text_input} >
                  <Input placeholder="Type here" placeholderTextColor='white' style={[Style.text_input_style, { height: 50 }]} />
                  <TouchableOpacity style={{ width: 100, height: 50, borderRadius: 25, backgroundColor: '#49e9c7', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={Style.name_text}>ADD</Text>
                  </TouchableOpacity>
                </Item>
              </Form>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 30, width: width - 60 }}>
              <View style={[Style.tag_view]}>
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

            </View>
            <TouchableOpacity style={{ width: width - 60, height: 50, borderRadius: 25, backgroundColor: '#49e9c7', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={Style.name_text}>CREATE</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: 30 }}></View>
        </ScrollView>
      </View >
    );
  }
}