import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Util } from 'you-kit';
import { YouHeader } from 'you-ui';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <YouHeader middleTitle="水果" />
        <ScrollView style={{ marginBottom: 20 }}>
          <Image
            source={require('assets/orange.png')}
            style={{
              height: 200,
              width: Util.screenWidth - 40,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20
            }}
          />
          {/* 
          <Image
            source={require('assets/banana.png')}
            style={{
              height: 200,
              width: Util.screenWidth - 40,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20
            }}
          /> */}
        </ScrollView>
      </View>
    );
  }
}
