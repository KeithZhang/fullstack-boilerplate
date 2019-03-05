import React from 'react';
import { View } from 'react-native';

import Todo from './todo';

const TodoList = ({ todos, toggleTodo }) => (
  <View>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </View>
);

export default TodoList;
