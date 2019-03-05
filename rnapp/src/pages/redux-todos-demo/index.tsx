import React from 'react';
import { View } from 'react-native';

import Footer from './components/footer';
import AddTodo from './containers/add-todo';
import VisibleTodoList from './containers/visible-todo-list';

const App = () => (
  <View>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
);

export default App;
