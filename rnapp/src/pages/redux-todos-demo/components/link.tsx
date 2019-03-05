import React from 'react';
import { Button } from 'react-native';

const Link = ({ active, children, onClick }) => (
  <Button title={children} onPress={onClick} disabled={active} />
);

export default Link;
