import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';

import ShoppingCart from './shopping-cart';
import { Address } from 'ui/';

export default class Root extends Component {
  state = {
    visible: false
  };

  render() {
    if (!this.state.visible) {
      return (
        <div>
          <button
            onClick={() => {
              this.setState({
                visible: !this.state.visible
              });
            }}
          >
            点我
          </button>
          hello
        </div>
      );
    }
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible
            });
          }}
        >
          点我
        </button>
        <Address />
      </div>
    );
  }
}

ReactDom.render(<Root />, document.getElementById('root'));
