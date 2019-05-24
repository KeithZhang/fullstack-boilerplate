import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { YouText } from 'you-ui';

import connect from '../connect';
import { ITemplateProps } from '../types';

class List extends Component<ITemplateProps, any> {
  static defaultProps = {};

  state = {};

  render() {
    return (
      <View>
        <YouText>list</YouText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default connect(List);
