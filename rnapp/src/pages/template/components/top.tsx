import { WhiteSpace } from '@ant-design/react-native';
import React, { Component } from 'react';
import { PixelRatio, StyleSheet, View } from 'react-native';

import connect from '../connect';
import { ITemplateProps } from '../types';

class Top extends Component<ITemplateProps, any> {
  static defaultProps = {};

  state = {};

  render() {
    // const { } = this.props.template;
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomColor: YouTheme.color.border,
            borderBottomWidth: 1 / PixelRatio.get()
          }
        ]}
      >
        <WhiteSpace />

        <WhiteSpace />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});

export default connect(Top);
