import './styles/index.less';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import bindGlobalDataFn from './config';
import Router from './router';
import store from './store';

export default class Root extends Component {
  componentWillMount() {
    bindGlobalDataFn();
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

ReactDom.render(<Root />, document.getElementById('app'));
