import React, { Fragment } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { Formik, ErrorMessage, Field, withFormik } from 'formik';
import { Text, Input, Divider, Icon } from 'react-native-elements';
import { YouTheme } from '../../../ui/global';

const FormItem = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <Input
    containerStyle={{
      flexDirection: 'row'
    }}
    inputContainerStyle={{
      flex: 1,
      borderBottomWidth: 0
    }}
    inputStyle={{
      paddingLeft: 120,
      fontSize: 14
    }}
    labelStyle={{
      alignSelf: 'center',
      color: '#000',
      fontSize: 14
    }}
    {...props}
    value={field.value}
    onChangeText={field.onChange(field.name)}
    rightIcon={<Icon name="right" type="antdesign" />}
  />
);

const FormComponent = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <View>
      <Field
        name="constratNo"
        component={FormItem}
        label="合同编号"
        placeholder="请输入合同号"
        onChangeText={handleChange}
      />

      <FormItem>
        <label></label>
        <input/>
      </FornItem>

      <ErrorMessage name="constratNo" render={msg => <Text>{msg}</Text>} />

      <Field
        name="customerName"
        component={FormItem}
        label="客户名称"
        placeholder="请输入客户"
      />
      <ErrorMessage name="customerName" render={msg => <Text>{msg}</Text>} />

      <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
};

const MyFormComponent = withFormik({
  mapPropsToValues: () => ({ customerName: '', constratNo: '' }),

  validate: values => {
    const errors = {};

    if (!values.constratNo) {
      errors.constratNo = '请输入合同编号';
    }

    if (!values.customerName) {
      errors.customerName = '请输入客户名称';
    }

    return errors;
  },
  handleSubmit: values => {
    console.log('values...', values);
  }
})(FormComponent);
// <Fragment>
//   <FormItem />
//   <Divider
//     style={{ backgroundColor: 'gray', marginLeft: 10, marginRight: 10 }}
//   />
//   <FormItem />
//   <Divider
//     style={{ backgroundColor: 'gray', marginLeft: 10, marginRight: 10 }}
//   />
// </Fragment>

const styles = StyleSheet.create({

});

export default MyFormComponent;


