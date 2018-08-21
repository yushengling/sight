import { combineReducers } from 'redux';
import { initialState } from './../store/PostDetailStore';

const postRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'POSTDETAILREDU':
      return Object.assign({}, state, action.list);
    break;
    default:
      return state;
  }
}
export default postRedu;