import React, { Fragment, Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Modal, PickerView, Icon } from '@ant-design/react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';
import { Text } from 'ui';

interface FormikModelSelectProps {
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

class FormikModelSelect extends Component<
  FormikModelSelectProps & { formik: FormikContext<any> }
> {
  state = {
    isVisible: false,
    value: undefined
  };

  onChange = value => {
    this.setState({
      value
    });
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
              fontSize: 15
            }}
          >
            {label}
          </Text>

          <TouchableOpacity
            style={{
              flex: 1,
              marginLeft: 50
            }}
            onPress={() => {
              this.setState({
                isVisible: true
              });
            }}
          >
            <View
              style={{
                backgroundColor: 'red',
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
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
            </View>
          </TouchableOpacity>
        </View>

        <ErrorMessage
          name={name}
          render={msg => (
            <Text
              style={{
                alignSelf: 'flex-end',
                fontSize: 16,
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
            onChange={this.onChange}
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
  FormikModelSelectProps,
  FormikModelSelectProps & { formik: FormikContext<any> }
>(FormikModelSelect);
