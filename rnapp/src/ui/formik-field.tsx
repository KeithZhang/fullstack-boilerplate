import React from 'react';
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
      <View>
        <Text>{label}</Text>

        <TextInput
          onChangeText={formik.handleChange(name)}
          value={formik.values[name]}
          placeholder={placeholder}
        />
      </View>
      <ErrorMessage name={name} render={msg => <Text>{msg}</Text>} />
    </View>
  );
};

export default connect<FieldProps, FieldProps & { formik: FormikContext<any> }>(
  Field
);
