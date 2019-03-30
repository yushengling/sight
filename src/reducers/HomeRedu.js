import {
    combineReducers,
} from 'redux';

const initialState = {
    count: 0,
};

const homeRedu = (state = initialState, action) => {
    switch (action.type) {
        case 'GETDATA':
            return Object.assign({}, state, action.datas);
        case 'ADD_TODO':
            console.log(456, action);
            return state;
        case 'ADD_TODOsuccess':
            console.log(123, action);
            return state;
        default:
            return state;
    }
};
/*const reducers = combineReducers({
  homeRedu
});
export default reducers; */
export default homeRedu;
