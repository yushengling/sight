import { combineReducers } from 'redux';
import { initialState } from './../store/PostStore';

const postRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'POSTREDU':
      return Object.assign({}, state, action.data, action.lists);
    break;
    case 'THEMEREDU': 
      return Object.assign({}, state, action.data);
    case 'UPDATEREDU':
      return Object.assign({}, state, action.postRedu);
    case 'CLEARREDU':
      return Object.assign({}, state, action.postRedu);
    default:
      return state;
  }
}
export default postRedu;