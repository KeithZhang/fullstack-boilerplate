import React, { Component } from 'react';

import { Picker } from 'react-native';

export default class NativePicker extends Component {
  state = {
    language: 'java'
  };

  render() {
    return (
      <Picker
        mode="dropdown"
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ language: itemValue })
        }
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}
