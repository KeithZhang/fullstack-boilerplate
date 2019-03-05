import { VisibilityFilters } from './actions';
import { combineReducers } from 'redux';

const inputValues = (
  state = {
    textValue: '请输入TODO任务'
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_TODO_INPUT_VALUE':
      return { ...state, textValue: action.text };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  inputValues,
  visibilityFilter
});
