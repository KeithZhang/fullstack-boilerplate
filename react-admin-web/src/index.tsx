import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Router from './router';
import store from './store';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
