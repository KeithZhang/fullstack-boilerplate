import React, { Fragment } from 'react';
import { Formik } from 'formik';

import { FormikField, FormikPicker } from 'ui';
import {
  Provider,
  WingBlank,
  WhiteSpace,
  Button
} from '@ant-design/react-native';

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
      console.log('values..', values);
    }}
  >
    {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
      <WingBlank style={{ flex: 1 }}>
        <FormikPicker
          name="constractNo"
          label="合同编号"
          placeholder="请选择合同编号"
        />
        <WhiteSpace
          style={{ borderTopColor: YouTheme.color.border, borderTopWidth: 1 }}
        />

        <FormikField
          name="customerName"
          label="客户名称"
          placeholder="请输入客户名称"
        />

        <WhiteSpace
          style={{ borderTopColor: YouTheme.color.border, borderTopWidth: 1 }}
        />

        <Button onPress={handleSubmit} type="primary">
          提交
        </Button>
      </WingBlank>
    )}
  </Formik>
);

const Form = ({ handleSubmit }: { handleSubmit: any }) => (
  <WingBlank style={{ flex: 1 }}>
    <FormikPicker
      name="constractNo"
      label="合同编号"
      placeholder="请选择合同编号"
    />
    <WhiteSpace
      style={{ borderTopColor: YouTheme.color.border, borderTopWidth: 1 }}
    />

    <FormikField
      name="customerName"
      label="客户名称"
      placeholder="请输入客户名称"
    />

    <WhiteSpace
      style={{ borderTopColor: YouTheme.color.border, borderTopWidth: 1 }}
    />

    <Button onPress={handleSubmit} type="primary">
      提交
    </Button>
  </WingBlank>
);

export default () => (
  <Provider>
    <FormComponent />
  </Provider>
);
