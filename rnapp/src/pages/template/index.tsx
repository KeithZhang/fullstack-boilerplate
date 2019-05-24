import React, { Component } from 'react';
import { YouHeader, YouPage } from 'you-ui';

import List from './components/list';
import Top from './components/top';
import connect from './connect';
import { ITemplateProps } from './types';

class Template extends Component<ITemplateProps, any> {
  componentDidMount() {
    this.props.init();
  }

  componentWillUnmount() {
    this.props.clean();
  }

  render() {
    return (
      <YouPage>
        <YouHeader middleTitle="我的" />
        <Top />
        <List />
      </YouPage>
    );
  }
}

export default connect(Template);
