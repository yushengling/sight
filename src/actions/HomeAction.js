const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const getData = (dispatch,count) => {
  dispatch({
    type:'GETDATA_ASYNC',
    count
  });
}

const userClick = (dispatch, data, id, num) => {
  dispatch({
    type: 'CLICK_SAGA',
    data,
    id,
    num
  });
}

const clear = (dispatch, homeData) => {
  homeData.code = 0;
  homeData.message = '';
  dispatch({
    type: 'CLEARREDU',
    homeData
  });
}

export { getData, userClick, clear };