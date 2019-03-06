import React, { Component, ComponentClass } from 'react';
import { Formik } from 'formik';
import {
  Provider,
  WingBlank,
  WhiteSpace,
  Button
} from '@ant-design/react-native';
import { FormikField, FormikPicker } from 'ui';
import { connect } from 'react-redux';

import mapDispatchToProps from '../actions';
import { PickerData } from '@ant-design/react-native/lib/picker/PropsType';

interface FormComponentProps {
  constractTypes: PickerData[] | PickerData[][];
}

class FormComponent extends Component<
  FormComponentProps & ReturnType<typeof mapDispatchToProps>
> {
  componentWillMount() {
    this.props.init();
  }

  render() {
    const { constractTypes } = this.props;
    return (
      <Provider>
        <Formik
          initialValues={{
            customerName: '',
            constractType: [-1],
            constractTypes
          }}
          validate={values => {
            const errors: {
              constractType?: string;
              customerName?: string;
            } = {};

            if (values.constractType[0] == -1) {
              errors.constractType = '合同编号必须填写';
            }

            if (!values.customerName) {
              errors.customerName = '客户名称必须填写';
            }

            return errors;
          }}
          onSubmit={values => {
            this.props.submit(values);
          }}
          component={Form}
        />
      </Provider>
    );
  }
}

const Form = ({ handleSubmit, values }: { handleSubmit: any; values: any }) => {
  return (
    <WingBlank style={{ flex: 1 }}>
      <FormikPicker
        data={values.constractTypes}
        name="constractType"
        label="合同类型"
        placeholder="请选择合同类型"
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
};

const mapStateToProps = state => {
  console.log('state..', state);
  return state.constractTypes;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormComponent) as any;
