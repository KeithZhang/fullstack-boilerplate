import React, { Fragment } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { ErrorMessage, connect, FormikContext } from 'formik';

interface FieldProps {
  name: string;
  label: string;
  placeholder: string;
}

const Field = (props: FieldProps & { formik: FormikContext<any> }) => {
  const { formik, name, label, placeholder } = props;

  return (
    <View>
      <View style={{ flexDirection: 'row', height: 44, marginLeft: 16 }}>
        <Text style={{ alignSelf: 'center', fontSize: 15 }}>{label}</Text>

        <View
          style={{
            flex: 1,
            marginRight: 16,
            marginLeft: 54
          }}
        >
          <TextInput
            style={{
              fontSize: 16
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
    </View>
  );
};

export default connect<FieldProps, FieldProps & { formik: FormikContext<any> }>(
  Field
);
