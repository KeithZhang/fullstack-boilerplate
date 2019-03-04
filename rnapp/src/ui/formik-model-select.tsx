import React, { Fragment } from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';

interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
}

const Field = (props: FieldProps & { formik: FormikContext<any> }) => {
  const { formik, name, label } = props;

  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          height: 44,
          justifyContent: 'space-between',
          marginLeft: 16
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

        <View
          style={{
            flex: 1,
            marginLeft: 50,
            marginRight: 16
          }}
        >
          <Picker
            mode="dropdown"
            style={{ height: 44 }}
            selectedValue={formik.values[name]}
            onValueChange={(itemValue, itemIndex) =>
              console.log('itemValue..', itemValue)
            }
          >
            <Picker.Item
              label="请选择语言"
              value="java"
              color={YouTheme.color.text_caption}
            />
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
        </View>
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
    </Fragment>
  );
};

export default connect<FieldProps, FieldProps & { formik: FormikContext<any> }>(
  Field
);
