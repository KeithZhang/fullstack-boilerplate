import React, {Component} from 'react'

class AppLayout extends Component {
  
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default AppLayout