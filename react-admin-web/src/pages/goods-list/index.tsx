import React, { Component, ComponentClass } from 'react';
import { connect } from 'react-redux';

import action from './action';
import { IGoodsListProps } from './types';

class GoodsList extends Component<IGoodsListProps> {
  render() {
    const { loading } = this.props.goodsList;
    console.log('loading...', loading);
    return <div>hello goods list...</div>;
  }
}

export default connect(
  goodsList => {
    return goodsList;
  },
  action
)(GoodsList);

// export default GoodsList;
