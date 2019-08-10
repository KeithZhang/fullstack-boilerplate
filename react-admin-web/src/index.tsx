import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Root extends Component {
  render() {
    return <div>hello world</div>;
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
