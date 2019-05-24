import React from 'react';
import { FlatList, Text } from 'react-native';

const FlatListDemo = () => (
  <FlatList
    data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
    renderItem={({ item }) => <Text>{item.key}</Text>}
  />
);

export default FlatListDemo;
