/**
 * @flow
 */

import React, {Component} from 'react'

import {StoreProvider} from 'iflux2'

import {HomeStore} from './HomeStore'
import {AppList} from './component/AppList'

@StoreProvider(HomeStore)
export class HomeContainer extends Component {

  componentDidMount() {
    this.props.store.init()
  }

  render() {
    console.log('HomeContainer render...')

    return (
      <div>
        home Container!
        <AppList/>
      </div>
    )
  }
}

