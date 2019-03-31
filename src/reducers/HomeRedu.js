import {
    combineReducers,
} from 'redux';

const initialState = {
    card: {},
};

const homeRedu = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CARD':
            return Object.assign({}, state, {
                card: action
            });
        default:
            return state;
    }
};
/* const reducers = combineReducers({
  homeRedu
});
export default reducers; */
export default homeRedu;
