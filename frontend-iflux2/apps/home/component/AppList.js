/**
 * @flow
 */

import React, {Component} from 'react'

import {Relax} from 'iflux2'

@Relax
export class AppList extends Component {

  static defaultProps = {
    apps: ''
  };

  render() {
    console.log('AppList render...', this.props)
    return (
      <div>
        {
          this.props.apps && this.props.apps.map((v, i) => {
            return (
              <div key={i}>{v.name}</div>
            )
          })
        }
      </div>
    )
  }
}
