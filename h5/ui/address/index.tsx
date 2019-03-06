import React, { Component } from 'react';

export default class Address extends Component {
  state = {
    CHINA_REGION: window.CHINA_REGION
  };

  componentWillMount() {
    if (!this.state.CHINA_REGION) {
      this.loadScript(
        'https://pic.qianmi.com/themes/common/region/China_Region_Last.js'
      );
    }
  }

  render() {
    if (!this.state.CHINA_REGION) {
      return <div>loading</div>;
    }
    return <div>success</div>;
  }

  loadScript(src: string) {
    let tag = document.createElement('script');
    tag.type = 'text/javascript';
    tag.async = true;
    tag.src = src;
    let body = document.getElementsByTagName('body')[0];

    tag.onreadystatechange = () => {
      console.log('onreadystatechange..', tag.readyState);
      const state = tag.readyState;
      if (state === 'complete') {
        console.log('complete');
      } else if (state === 'error') {
        console.log('error');
      }
    };

    tag.addEventListener('load', e => {
      console.log('load e...', e);
      this.setState({
        CHINA_REGION: window.CHINA_REGION
      });
    });
    tag.addEventListener('error', e => {
      console.log('err e...', e);
    });
    body.appendChild(tag);
  }
}
