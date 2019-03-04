import React, { Component } from 'react';
import { View, Modal, Alert, TouchableHighlight } from 'react-native';
import { Overlay, Text } from 'react-native-elements';

export default class ModalExample extends Component {
  state = {
    isVisible: false
  };

  setModalVisible(visible) {
    this.setState({ isVisible: visible });
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Overlay
          isVisible={this.state.isVisible}
          windowBackgroundColor="rgba(0, 0, 0, .5)"
          overlayBackgroundColor="red"
          width="auto"
          height="200"
        >
          <Text>Hello from Overlay!</Text>
        </Overlay>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(!this.state.isVisible);
          }}
        >
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
