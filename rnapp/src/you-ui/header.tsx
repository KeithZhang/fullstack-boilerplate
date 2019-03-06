import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';

import { Util } from 'you-kit';
import Text from './text';
import { Icon } from '@ant-design/react-native';

interface YouHeaderProps {
  /**
   * 是否存在返回按钮
   */
  back?: boolean;
  /**
   * 头部中间显示标题
   */
  middleTitle?: string;

  /**
   * 头部左侧显示标题
   */
  leftTitle?: string;

  /**
   * 自定义右侧
   */
  right?: any;

  backgroundColor?: string;
}

/**
 * header模块
 * Usage
 */
export default class YouHeader extends Component<YouHeaderProps, any> {
  static defaultProps = {
    back: false,
    leftTitle: '',
    middleTtitle: '',
    right: false,
    backgroundColor: '#ffffff'
  };

  render() {
    const { backgroundColor } = this.props;
    return (
      <View style={[styles.container, { backgroundColor }]}>
        {this.renderBack()}
        {this.renderLeft()}
        {this.renderMiddle()}
        {this.renderRight()}
      </View>
    );
  }

  renderBack = () => {
    if (!this.props.back) {
      return null;
    }
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={{ top: 0, bottom: 0, left: 0, right: 20 }}
        onPress={() => {
          // YouNavigator.goBack();
        }}
      >
        <Icon
          name="left"
          style={{
            width: YouTheme.icon.sm,
            height: YouTheme.icon.sm
          }}
        />
      </TouchableOpacity>
    );
  };

  renderLeft = () => {
    if (!this.props.leftTitle) {
      return <View style={styles.leftContainer} />;
    }
    return (
      <View style={styles.leftContainer}>
        <Text numberOfLines={1} style={styles.leftTitle}>
          {this.props.leftTitle}
        </Text>
      </View>
    );
  };

  renderMiddle = () => {
    if (!this.props.middleTitle) {
      return <View />;
    }
    return (
      <View style={styles.middleContainer}>
        <Text numberOfLines={1} style={styles.middleTitle}>
          {this.props.middleTitle}
        </Text>
      </View>
    );
  };

  renderRight = () => {
    if (!this.props.right) {
      return <View style={styles.rightContainer} />;
    }

    return <View style={styles.rightContainer}>{this.props.right}</View>;
  };
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45
    // backgroundColor: 'yellow'
  } as ViewStyle,
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
    // backgroundColor: 'blue'
  } as ViewStyle,
  leftTitle: {
    width: (Util.screenWidth - 20) / 3,
    textAlign: 'center',
    fontSize: YouTheme.font.subhead
  } as ViewStyle,
  middleContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  } as ViewStyle,
  middleTitle: {
    textAlign: 'center',
    width: (Util.screenWidth - 20) / 3,
    fontSize: YouTheme.font.head
  } as TextStyle,
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
    // backgroundColor: 'green'
  } as ViewStyle
});
