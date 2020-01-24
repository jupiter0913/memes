// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, ScrollView, View, Image } from 'react-native';
//import all the components we are going to use.
import Style from './style';

export default class Trending extends React.Component {
  render() {
    return (
      <ScrollView style={Style.container}>
        <View style={Style.total_cell_view}>
          <View style={Style.first_cell_view}>
            <View style={Style.small_cell_view}>
              <View style={Style.small_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_5.png')} style={Style.small_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Angell of haven</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
            <View style={Style.large_cell_view}>
              <View style={Style.large_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_7.png')} style={Style.large_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>New Bride</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={Style.first_cell_view}>
            <View style={Style.large_cell_view}>
              <View style={Style.large_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_6.png')} style={Style.large_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Bear Grills</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
            <View style={Style.small_cell_view}>
              <View style={Style.small_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_8.png')} style={Style.small_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Life of Maduna</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={Style.total_cell_view}>
          <View style={Style.first_cell_view}>
            <View style={Style.small_cell_view}>
              <View style={Style.small_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_12.png')} style={Style.small_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Angell of haven</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
            <View style={Style.large_cell_view}>
              <View style={Style.large_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_10.png')} style={Style.large_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>New Bride</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={Style.first_cell_view}>
            <View style={Style.large_cell_view}>
              <View style={Style.large_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_11.png')} style={Style.large_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Bear Grills</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
            <View style={Style.small_cell_view}>
              <View style={Style.small_cell_image_view}>
                <Image source={require('../../assets/images/mask_group_9.png')} style={Style.small_cell_image_view} />
              </View>
              <View style={Style.title_cell_view}>
                <Text style={Style.title_style}>Life of Maduna</Text>
                <View style={Style.content_view}>
                  <Image source={require('../../assets/icons/face.png')} style={Style.face_icon_style} />
                  <Text style={Style.content_text_style}>5 Memes</Text>
                  <Image source={require('../../assets/icons/view.png')} style={Style.view_icon_style} />
                  <Text style={Style.content_text_style}>5M Views</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}