import { connect } from 'react-redux';

import mapDispatchToProps from './action';

const mapStateToProps = ({ template }: any) => {
  return {
    template
  };
};

export default (component: any): any => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component) as any;
};
