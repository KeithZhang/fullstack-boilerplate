import React from 'react';
import { SectionList, Text } from 'react-native';

const SectionListDemo = () => (
  <SectionList
    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
    )}
    sections={[
      { title: 'Title1', data: ['item1', 'item2'] },
      { title: 'Title2', data: ['item3', 'item4'] },
      { title: 'Title3', data: ['item5', 'item6'] }
    ]}
    keyExtractor={(item, index) => item + index}
  />
);

export default SectionListDemo;
