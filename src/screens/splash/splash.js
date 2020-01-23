import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import Style from './style';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Style.container} >
        <ImageBackground source={require("../../assets/images/mask_group_2.png")} style={Style.backgroundImage} />
        <View style={Style.textArea}>
          <Text style={Style.dopa} >Dopa</Text>
          <Text style={Style.memes_} >memes.</Text>
        </View>
      </View >
    )
  }
}