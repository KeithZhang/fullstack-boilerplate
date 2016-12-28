import {Store, msg} from 'iflux';
import {fromJS} from 'immutable';

let appStore = module.exports = Store({
  text: '你一抹微笑如茉莉!'
});
