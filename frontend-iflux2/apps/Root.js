/**
 * @flow
 */

import React, {Component} from 'react'
import {render} from 'react-dom'

import {HomeContainer} from './home/HomeContainer'

class Root extends Component {

  render() {
    return (
      <div>
        <HomeContainer/>
      </div>
    )
  }
}

render(<Root/>, document.getElementById("app"))