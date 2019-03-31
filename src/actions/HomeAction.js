import * as homeApi from '../servers/home.js';

const GET_CARD = 'GET_CARD';

const getCard = (dispatch) => {
    dispatch({
        type: GET_CARD,
        payload: homeApi.getCard()
    });
};

export {
    getCard,
};