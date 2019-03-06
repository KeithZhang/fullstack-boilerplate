import React, { Fragment } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';
import { YouText } from 'you-ui';

interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
}

const Field = (props: FieldProps & { formik: FormikContext<any> }) => {
  const { formik, name, label, placeholder } = props;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: 44
        }}
      >
        <YouText
          style={{ alignSelf: 'center', fontSize: YouTheme.font.subhead }}
        >
          {label}
        </YouText>

        <View
          style={{
            flex: 1,
            marginLeft: 80,
            alignContent: 'flex-start',
            alignItems: 'flex-start'
          }}
        >
          <TextInput
            style={{
              fontSize: YouTheme.font.subhead,
              paddingLeft: 0
            }}
            onChangeText={formik.handleChange(name)}
            value={formik.values[name]}
            placeholder={placeholder}
          />
        </View>
      </View>
      <ErrorMessage
        name={name}
        render={msg => (
          <YouText
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
          </YouText>
        )}
      />
    </View>
  );
};

export default connect<FieldProps, FieldProps & { formik: FormikContext<any> }>(
  Field
);