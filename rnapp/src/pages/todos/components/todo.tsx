import React from 'react';
import { Text } from 'react-native';

const Todo = ({ onClick, completed, text }) => (
  <Text onPress={onClick} style={{ color: completed ? '#000' : 'red' }}>
    {text}
  </Text>
);

export default Todo;
