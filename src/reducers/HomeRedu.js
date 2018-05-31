import { combineReducers } from 'redux';
import { initialState } from './../store/HomeStore';
import "babel-polyfill";

const homeRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'GETDATA':
      return Object.assign({}, state, action.homeData);
    break;
    case 'CLEARREDU':
      return Object.assign({}, state, action.homeData);
    default:
      return state;
  }
}
/*const reducers = combineReducers({
  homeRedu
});
export default reducers;*/
export default homeRedu;