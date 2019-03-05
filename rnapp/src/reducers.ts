import { combineReducers } from 'redux';

import constractReducers from './pages/constract/reducers';

export default combineReducers({
  ...constractReducers
});
