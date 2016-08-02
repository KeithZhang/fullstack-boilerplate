import React, {Component} from 'react'
import {render} from 'react-dom'
import User from './user'

class App extends Component {
  
  render() {
    return (
      <div>
        <User/>
      </div>
    )
  }
}
render(<App/>, document.getElementById('app'))