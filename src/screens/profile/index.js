import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import MetroTabs from '../../components/MetroTabs';
import CreatedPostsScreen from './created_posts';
import SavedPostsScreen from './saved_posts';

import Style from './style';

export default class App extends Component {
  gotoCreateMeme = () => {
    this.props.navigation.navigate('CreateMeme');
  };
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.profile_view}>
          <Image source={require('../../assets/images/mask_group_5.png')} style={Style.avatar_image_view} />
          <Text style={Style.name_text}>Mark Hemlin</Text>
          <Text style={Style.detail_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
        </View>
        <MetroTabs
          screens={[
            { key: '1', title: 'Created Posts', screen: <CreatedPostsScreen /> },
            { key: '2', title: 'Saved Posts', screen: <SavedPostsScreen /> },
            { key: '3', title: 'top paid', screen: <SavedPostsScreen /> }
          ]}
        />
        <View style={Style.round_view}>
          <TouchableOpacity style={Style.round_button} onPress={this.gotoCreateMeme}>
            <Text style={Style.add_text_style}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}