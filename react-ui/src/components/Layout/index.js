import React, {Component} from 'react'

class Layout extends Component {
  
  render() {
    return (
      <div className='mlayout'>
        我是一个大大的布局
        {this.props.children}
      </div>
    )
  }
}

export default Layout