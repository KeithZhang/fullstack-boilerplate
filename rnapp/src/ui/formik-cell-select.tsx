import React from 'react';
import { StyleSheet, View, Text, TextInput, Picker } from 'react-native';
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

        <Picker
          selectedValue={'java'}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            console.log('itemValue..', itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <ErrorMessage name={name} render={msg => <Text>{msg}</Text>} />
    </View>
  );
};

export default connect<FieldProps, FieldProps & { formik: FormikContext<any> }>(
  Field
);
