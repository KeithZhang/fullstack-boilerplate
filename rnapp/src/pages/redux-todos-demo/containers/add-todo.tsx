import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { addTodo, changeTodoInputValue } from '../actions';

const AddTodo = ({ dispatch, textValue }) => {
  console.log('textValue...', textValue);
  return (
    <View>
      <TextInput
        style={{ borderWidth: 1 }}
        value={textValue}
        onChangeText={text => {
          console.log('text1..', text);
          dispatch(changeTodoInputValue(text));
        }}
      />
      <Button
        title="增加"
        onPress={() => {
          dispatch(addTodo(textValue));
        }}
      />
    </View>
  );
};

const mapStateToProps = state => {
  console.log('state..', state);
  return { textValue: state.inputValues.textValue };
};

export default connect(mapStateToProps)(AddTodo);
