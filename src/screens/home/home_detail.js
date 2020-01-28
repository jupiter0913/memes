import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Form, Textarea } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';

import Style from './style';
import Share_Style from '../../theme/style';
import { Dimensions } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

export default class HomeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../../assets/images/mask_group_5.png'),
        require('../../assets/images/mask_group_6.png'),
        require('../../assets/images/mask_group_7.png'),
        require('../../assets/images/mask_group_8.png'),
        require('../../assets/images/mask_group_18.png'),
      ]
    };
  }   // other component code ... }
  goBack = () => {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <View style={Style.container}>
        <ScrollView>
          <View>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={300}
              onCurrentImagePressed={
                index => console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={80}
              autoplay
              circleLoop />
          </View>
          <View style={Share_Style.header_style}>
            <TouchableOpacity transparent onPress={this.goBack}>
              <Image source={require('../../assets/icons/back.png')} style={Share_Style.icon_style} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={Style.title_text}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: width, height: 70, backgroundColor: 'rgba(100,100,100, 255)', opacity: 0.5, marginTop: -70 }}>
          </View>
          <View style={{ width: width, height: 70, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: -70 }}>
            <Image source={require('../../assets/icons/view_white.png')} style={{ width: 42, height: 24, marginRight: 10 }} />
            <Text style={Style.title_text}>1M Views</Text>
          </View>
          <View style={{ paddingLeft: 30, paddingRight: 30 }}>
            <View style={{ flexDirection: 'row', width: '100%', height: 80, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={require('../../assets/icons/finger_up.png')} style={{ width: 32, height: 32, marginLeft: 10, marginRight: 10 }} />
              <Text style={[Style.title_text, { color: '#444a6c' }]}>458</Text>
              <View style={{ width: 1, height: 20, backgroundColor: '#374061', marginLeft: 10, marginRight: 10 }}></View>
              <Image source={require('../../assets/icons/finger_down.png')} style={{ width: 32, height: 32, marginLeft: 10, marginRight: 10 }} />
              <Text style={[Style.title_text, { color: '#444a6c' }]}>458</Text>
              <View style={{ width: 1, height: 20, backgroundColor: '#374061', marginLeft: 10, marginRight: 10 }}></View>
              <Image source={require('../../assets/icons/return.png')} style={{ width: 32, height: 32, marginLeft: 10, marginRight: 10 }} />
              <Text style={[Style.title_text, { color: '#444a6c' }]}>Share</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 24 }}>Source:</Text>
            <Text style={{ color: '#989cb5', fontSize: 16, marginTop: 10 }}>https://www.myweb.com/monilhazaree/day_01</Text>
            <View style={{ flexDirection: 'row', paddingTop: 30, justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'white', fontSize: 24, }}>Comments</Text>
                <Text style={{ color: '#989cb5', fontSize: 24, marginLeft: 10 }}>(500)</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#6ed2d8', fontSize: 16 }}>Last</Text>
                <View style={{ width: 1, height: 20, backgroundColor: '#374061', marginLeft: 10, marginRight: 10 }}></View>
                <Text style={{ color: '#374061', fontSize: 16 }}>Popular</Text>
              </View>
            </View>
            <Form>
              <Textarea rowSpan={5} bordered placeholder="Type here" onChangeText={message => this.setState({ message: message })} style={Style.text_input} />
            </Form>
            <View style={{ alignItems: 'flex-end', paddingTop: 30, paddingBottom: 30 }}>
              <TouchableOpacity style={{ width: 90, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#52e9a6' }}>
                <Text style={Style.title_text}>POST</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/mask_group_13_ek1.png')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }} />
                <View>
                  <Text style={Style.title_text}>Robert Flems</Text>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>UX Designer</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 50 }}>
                <View>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>20/01/2019</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: '#747a9a' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Text>
            </View>
            <View style={{ width: '100%', height: 3, backgroundColor: '#19254d', marginTop: 20, marginBottom: 20 }}></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/mask_group_13_ek2.png')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }} />
                <View>
                  <Text style={Style.title_text}>Robert Flems</Text>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>UX Designer</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 50 }}>
                <View>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>20/01/2019</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: '#747a9a' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Text>
            </View>
            <View style={{ width: '100%', height: 3, backgroundColor: '#19254d', marginTop: 20, marginBottom: 20 }}></View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/images/mask_group_13_ek3.png')} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 20 }} />
                <View>
                  <Text style={Style.title_text}>Robert Flems</Text>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>UX Designer</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 50 }}>
                <View>
                  <Text style={{ color: '#414a70', fontSize: 16 }}>20/01/2019</Text>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: '#747a9a' }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</Text>
            </View>
            <View style={{ width: '100%', height: 3, backgroundColor: '#19254d', marginTop: 20, marginBottom: 20 }}></View>


          </View>
          <View style={{ height: 20 }}></View>
        </ScrollView>
      </View>
    );
  }
}