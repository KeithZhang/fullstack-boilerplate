import { ActionSheet, Button } from '@ant-design/react-native';
import React, { Component } from 'react';
import { View } from 'react-native';
import { YouHeader } from 'you-ui';

export default class User extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <YouHeader middleTitle="我的" />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Button type="primary" onPress={this.showActionSheet}>
            切换环境
          </Button>
        </View>
      </View>
    );
  }

  showActionSheet = () => {
    const BUTTONS = ['测试环境', '开发环境', '演示环境', '生产环境', '取消'];
    ActionSheet.showActionSheetWithOptions(
      {
        title: '环境列表',
        message: '选择你想体验的环境',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }
    );
  };
}
