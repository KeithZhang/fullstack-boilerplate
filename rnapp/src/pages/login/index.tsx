import React, { Component } from 'react';
import { View } from 'react-native';
import { YouHeader } from 'you-ui';

export default class Login extends Component {
  render() {
    return (
      <View>
        <YouHeader middleTitle="登录" />

        {/* <Mention />
        <Form />
        <Bottom /> */}
      </View>
    );
  }
}
