import React, {Component} from 'react'
import {render} from 'react-dom'
import {StoreProvider} from 'iflux2'
import AppStore from './store'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'

import './css/base.css'
import './css/index.css'



//debug: true, it will show good logs
@StoreProvider(AppStore, {debug: true})
export default class TodoApp extends Component {
  render() {
    return (
      <section className="todoapp">
        <Header />
        <Content />
        <Footer />
      </section>
    );
  }
}


render(<TodoApp/>, document.getElementById('app'));