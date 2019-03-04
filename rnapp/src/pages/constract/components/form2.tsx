import React, { Fragment } from 'react';
import { Button } from 'react-native';
import { Formik } from 'formik';

import { FormikField, FormCellSelect } from 'ui';

console.log('hello');
const FormComponent = () => (
  <Formik
    initialValues={{ constractNo: '', customerName: '' }}
    validate={values => {
      const errors = {};

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
  >
    {({ handleSubmit }) => (
      <Fragment>
        <FormCellSelect
          name="constractNo"
          label="合同编号"
          placeholder="请输入合同编号"
        />

        {/* <FormCellSelect
          name="customerName"
          label="客户名称"
          placeholder="请输入客户名称"
        /> */}

        <Button onPress={handleSubmit as any} title="Submit" />
      </Fragment>
    )}
  </Formik>
);

export default FormComponent;
