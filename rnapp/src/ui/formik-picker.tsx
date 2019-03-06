import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Picker } from 'react-native';
import {
  Modal,
  PickerView,
  Icon,
  Button,
  WingBlank,
  WhiteSpace
} from '@ant-design/react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';
import { Text } from 'ui';
import { PickerData } from '@ant-design/react-native/lib/picker/PropsType';

interface FormikPickerProps {
  data: PickerData[] | PickerData[][];
  name: string;
  label: string;
  placeholder: string;
}

class FormikPicker extends Component<
  FormikPickerProps & { formik: FormikContext<any> }
> {
  state = {
    isVisible: false,
    selectValue: [0]
  };

  render() {
    const { formik, data, name, label, placeholder } = this.props;
    console.log('data...', data);
    console.log('formik...', formik);
    console.log('formik.values[name][0]..', formik.values[name]);

    if (!data) {
      return null;
    }
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
                color:
                  formik.values[name][0] == -1
                    ? YouTheme.color.text_caption
                    : YouTheme.color.text_base,
                alignItems: 'center'
              }}
            >
              {formik.values[name][0] == -1
                ? placeholder
                : data[0][formik.values[name][0]]['label']}
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
          <View>
            <WingBlank
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10
              }}
            >
              <Button
                type="ghost"
                onPress={() => {
                  this.setState({
                    isVisible: false
                  });
                }}
              >
                取消
              </Button>
              <Button
                type="ghost"
                onPress={() => {
                  this.setState({
                    isVisible: false
                  });
                  formik.setFieldValue(name, this.state.selectValue);
                }}
              >
                确认
              </Button>
            </WingBlank>

            <PickerView
              onChange={e => {
                console.log('e..', e);
                this.setState({
                  selectValue: e
                });
              }}
              value={this.state.selectValue}
              data={data}
              cascade={false}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

export default connect<
  FormikPickerProps,
  FormikPickerProps & { formik: FormikContext<any> }
>(FormikPicker);
