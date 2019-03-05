import React, { Fragment, Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ViewStyle } from 'react-native';
import { Modal, PickerView, Icon } from '@ant-design/react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';
import { Text } from 'ui';

interface FormikPickerProps {
  name: string;
  label: string;
  placeholder: string;
}

const seasons = [
  [
    {
      label: '2013',
      value: '2013'
    },
    {
      label: '2014',
      value: '2014'
    }
  ],
  [
    {
      label: '春',
      value: '春'
    },
    {
      label: '夏',
      value: '夏'
    }
  ]
];

class FormikPicker extends Component<
  FormikPickerProps & { formik: FormikContext<any> }
> {
  state = {
    isVisible: false,
    value: undefined
  };

  render() {
    const { formik, name, label, placeholder } = this.props;

    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            height: 44,
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              fontSize: YouTheme.font.subhead
            }}
          >
            {label}
          </Text>

          <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
            onPress={() => {
              this.setState({
                isVisible: true
              });
            }}
          >
            <Text
              style={{
                color: YouTheme.color.text_caption,
                alignItems: 'center'
              }}
            >
              {placeholder}
            </Text>
            <Icon name="down" size="md" />
          </TouchableOpacity>
        </View>

        <ErrorMessage
          name={name}
          render={msg => (
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: YouTheme.font.subhead,
                marginLeft: 16,
                marginRight: 16,
                marginTop: 8,
                color: YouTheme.color.brand_error
              }}
            >
              {msg}
            </Text>
          )}
        />

        <Modal
          popup
          maskClosable
          animationType="slide-up"
          visible={this.state.isVisible}
          onClose={() => {
            this.setState({
              isVisible: false
            });
          }}
        >
          <PickerView
            onChange={formik.handleChange}
            value={this.state.value}
            data={seasons}
            cascade={false}
          />
        </Modal>
      </View>
    );
  }
}

export default connect<
  FormikPickerProps,
  FormikPickerProps & { formik: FormikContext<any> }
>(FormikPicker);
