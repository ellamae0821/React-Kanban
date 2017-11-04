import {combineReducers} from 'redux';
import cardList from './cardList.js';
import userList from './userList.js';
export default combineReducers({
  cardList, userList
});