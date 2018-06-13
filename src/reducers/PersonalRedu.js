import { combineReducers } from 'redux';
import { initialState } from './../store/PersonalStore';

const userRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'PERSONALREDU':
      return Object.assign({}, state, action.data);
    break;
    default:
      return state;
  }
}
export default userRedu;