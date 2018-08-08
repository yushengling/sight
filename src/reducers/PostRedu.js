import { combineReducers } from 'redux';
import { initialState } from './../store/PostStore';

const postRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'POSTREDU':
      return Object.assign({}, state, action.data);
    break;
    default:
      return state;
  }
}
export default postRedu;