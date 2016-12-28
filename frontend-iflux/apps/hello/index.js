/**
 * hello.js
 */
import React from 'react';
import appStore from './store';
import iflux from 'iflux';
let StoreMixin = iflux.mixins.StoreMixin;


let Hello = React.createClass({
  mixins: [StoreMixin(appStore)],


  render() {
    let store = appStore.data();

    return (
      <h1>{':) ' + store.get('text')}</h1>    
    );
  }
});

React.render(<Hello/>, document.body);
