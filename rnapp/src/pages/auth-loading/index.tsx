import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import { YouText } from 'you-ui';
// import { YouLoading } from 'you-ui';

export default class AuthLoading extends Component {
  async componentWillMount() {
    try {
      let token = (await AsyncStorage.getItem('token')) || true;
      console.log('token...', token);
      YouNavigator.navigate(token ? 'App' : 'Auth');
    } catch (err) {
      //report err
      console.log('err...', err);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        {/* <YouLoading /> */}

        <YouText>loding</YouText>
      </View>
    );
  }
}
