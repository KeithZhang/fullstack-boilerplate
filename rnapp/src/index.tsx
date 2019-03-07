import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Constract from './pages/constract';
import UiDemo from './pages/ui-demo';
import ReduxTodosDemo from './pages/redux-todos-demo';
import AuthNavigator from './navigator';

import rootReducer from './reducers';
const store = createStore(rootReducer);

export default class RootContainer extends Component {
  _ref: any;

  componentDidMount() {
    window['YouNavigator'] = (this._ref as any)._navigation;
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Provider store={store}>
          <StatusBar />
          <AuthNavigator ref={ref => (this._ref = ref)} />
        </Provider>
      </SafeAreaView>
    );
  }
}
