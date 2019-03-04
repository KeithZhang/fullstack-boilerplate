import React, { Fragment } from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';

import { FormikField, FormCellSelect } from 'ui';

const FormComponent = () => (
  <Formik
    initialValues={{ constractNo: '', customerName: '' }}
    validate={values => {
      const errors = {
        constractNo: '',
        customerName: ''
      };

      if (!values.constractNo) {
        errors.constractNo = '合同编号必须填写';
      }

      if (!values.customerName) {
        errors.customerName = '客户名称必须填写';
      }

      return errors;
    }}
    onSubmit={values => {
      console.log('vallues...', values);
    }}
    component={Form}
  />
);

const Form = ({ handleSubmit }: { handleSubmit: any }) => (
  <View
    style={{
      flex: 1,
      marginTop: 50
    }}
  >
    <FormCellSelect
      name="constractNo"
      label="合同编号"
      placeholder="请输入合同编号"
    />

    <FormikField
      name="customerName"
      label="客户名称"
      placeholder="请输入客户名称"
    />

    <Button onPress={handleSubmit as any} title="Submit" />
  </View>
);

export default FormComponent;
