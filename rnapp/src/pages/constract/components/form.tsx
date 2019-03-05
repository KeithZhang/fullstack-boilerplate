import React, { Fragment } from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';

import { FormikField, FormikModelSelect } from 'ui';
import { Provider, WingBlank, WhiteSpace } from '@ant-design/react-native';

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
  <WingBlank style={{ flex: 1 }}>
    <FormikModelSelect
      name="constractNo"
      label="合同编号"
      placeholder="请输入合同编号"
    />
    <WhiteSpace style={{ borderBottomColor: 'red', borderBottomWidth: 1 }} />

    <FormikField
      name="customerName"
      label="客户名称"
      placeholder="请输入客户名称"
    />

    <WhiteSpace />

    <FormikModelSelect
      name="constractNo"
      label="合同编号"
      placeholder="请输入合同编号"
    />
    <WhiteSpace />

    <Button onPress={handleSubmit as any} title="Submit" />
  </WingBlank>
);

export default () => (
  <Provider>
    <FormComponent />
  </Provider>
);
