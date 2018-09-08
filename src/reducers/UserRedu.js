import { combineReducers } from 'redux';
const initialState = {
  code: 0,
  message: '',  
}
const userRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'REGISTERREDU':
      return Object.assign({}, state, action.data);
    break;
    case 'CLEARREDU':
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
/*const reducers = combineReducers({
  userRedu
});
export default reducers;*/
export default userRedu;