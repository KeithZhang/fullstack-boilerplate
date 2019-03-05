import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Form from './components/form';

class Constract extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Form />
      </View>
    );
  }
}

export default Constract;
