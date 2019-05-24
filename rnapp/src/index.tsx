import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import CodePush from 'react-native-code-push';
import { SafeAreaView } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AuthNavigator from './navigator';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class RootContainer extends Component {
  _ref: any;

  componentDidMount() {
    window['YouNavigator'] = (this._ref as any)._navigation;

    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: {
        title: '新版本'
      }
    });
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

export default CodePush({ checkFrequency: CodePush.CheckFrequency.MANUAL })(
  RootContainer
);
