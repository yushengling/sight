import { combineReducers } from 'redux';
const initialState = {
  count: 0,
  listData: [],
  total: 0,
  code: 0,
  message: ''
};

const changeState = {
  code: 0,
  message: ''
};

const homeRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'GETDATA':
      return Object.assign({}, state, action.homeData);
    break;
    case 'CLEARREDU':
      return Object.assign({}, state, changeState);
    default:
      return state;
  }
}
/*const reducers = combineReducers({
  homeRedu
});
export default reducers;*/
export default homeRedu;