import {
    combineReducers,
} from 'redux';

const initialState = {
    count: 0,
    listData: [],
    total: 0,
    code: 0,
    message: '',
    isRender: false,
};

const homeRedu = (state = initialState, action) => {
    switch (action.type) {
    case 'GETDATA':
        return Object.assign({}, state, action.datas);
    default:
        return state;
    }
};
/*const reducers = combineReducers({
  homeRedu
});
export default reducers; */
export default homeRedu;
