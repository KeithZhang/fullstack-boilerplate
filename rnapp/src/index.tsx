import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './pages/todos/reducers';

import Constract from './pages/constract';
import Todos from './pages/todos';

const store = createStore(rootReducer);

import { ThemeType } from 'ui/styles';

// declare const YouNavigator: NavigationScreenProp<NavigationState>;
declare const YouTheme: ThemeType;

export default class RootContainer extends Component {
  componentDidMount() {
    // (global || window)['YouNavigator'] = (this._ref as any)._navigation;
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        {/* <Provider store={store}> */}
        <StatusBar />
        <Constract />
        {/* </Provider> */}
      </SafeAreaView>
    );
  }
}
