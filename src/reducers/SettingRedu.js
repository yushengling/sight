import { combineReducers } from 'redux';
import { initialState } from './../store/SettingStore';

const settingRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'SETTINGREDU':
      return Object.assign({}, state, action.data);
    break;
    default:
      return state;
  }
}
export default settingRedu;