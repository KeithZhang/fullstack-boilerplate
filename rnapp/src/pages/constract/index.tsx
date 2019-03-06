import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Form from './components/form';
import { YouHeader } from 'you-ui';

class Constract extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <YouHeader back middleTitle="新建合同" />
        <Form />
      </View>
    );
  }
}

export default Constract;
