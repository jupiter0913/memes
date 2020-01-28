import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Item, Label, Form, Input } from 'native-base';

import Style from './style';
import Share_Style from '../../theme/style';

export default class SplashScreen extends React.Component {
  gotoLogin = () => {
    this.props.navigation.navigate('Login');
  }
  render() {
    return (
      <View style={Style.container} >
        <ImageBackground source={require("../../assets/images/mask_group_2.png")} style={Style.backgroundImage} />
        <View style={Style.textArea}>
          <Image source={require('../../assets/images/logo.png')} style={Share_Style.logo_style} />
        </View>
        <View style={Style.retangleArea}></View>
        <View style={Style.sign_in_view}>
          <Text style={Style.sign_in}>Sign Up</Text>
        </View>
        <View style={Style.text_input_view}>
          <Form>
            <Item style={Style.text_input} >
              <Input placeholder="Username" placeholderTextColor='white' style={Style.text_input_style} />
            </Item>
            <Item style={Style.text_input} >
              <Input placeholder="Email or Phone" placeholderTextColor='white' style={Style.text_input_style} />
            </Item>
            <Item style={Style.text_input} >
              <Input placeholder="Password" placeholderTextColor='white' style={Style.text_input_style} />
            </Item>
          </Form>
        </View>
        <View style={Style.sign_in_button_view}>
          <TouchableOpacity style={[Style.sign_in_button, { backgroundColor: 'rgba(255,72,112,1)' }]}>
            <Text style={Style.sign_in_button_text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.or_text_view}>
          <Text style={Style.or_text}>OR</Text>
        </View>
        <View style={Style.social_button_view}>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>in</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.sign_up_view}>
          <Text style={Style.or_text}>Already have an account?</Text>
          <TouchableOpacity onPress={this.gotoLogin} transparent>
            <Text style={[Style.or_text, { color: '#44e9d5' }]}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}