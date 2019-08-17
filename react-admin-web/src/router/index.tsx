import React, { Component } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import BasicLayout from '../layout';
import GoodsList from '../pages/goods-list';
import Home from '../pages/home';
import Login from '../pages/login';
import NoMatch from '../pages/no-match';
import OrderList from '../pages/order-list';
import routes from './routes';

export default class Router extends Component {
  render() {
    console.log('routes..', routes);
    console.log('window..', window.menuList);

    const isLogin = true;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/panther"
            render={data =>
              isLogin ? (
                <BasicLayout>
                  <Route exact path="/panther" component={Home} />
                  <Route path="/panther/goods-list" component={GoodsList} />
                  <Route path="/panther/order-list" component={OrderList} />
                  <Link to="/login">login</Link>
                </BasicLayout>
              ) : (
                <Redirect to={{ pathname: '/login' }} />
              )
            }
          />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}
