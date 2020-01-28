import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import Style from './style';
import Share_Style from '../../theme/style';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Style.container} >
        <ImageBackground source={require("../../assets/images/mask_group_2.png")} style={Style.backgroundImage} />
        <View style={Style.textArea}>
          <Image source={require('../../assets/images/logo.png')} style={Share_Style.logo_style} />
        </View>
      </View >
    )
  }
}