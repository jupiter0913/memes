import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

export default class SavedPosts extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Text style={{ color: 'white' }}>Saved Posts Screen</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}