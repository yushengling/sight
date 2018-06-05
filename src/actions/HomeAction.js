const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const getData = (dispatch,count) => {
  dispatch({
    type:'GETDATA_ASYNC',
    count
  });
}

const collection = (dispatch, data, id) => {
  dispatch({
    type: 'COLLECTION_SAGA',
    data,
    id
  });
}

const like = (dispatch, data, id) => {
  dispatch({
    type: 'LIKE_SAGA',
    data,
    id
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

export { getData, collection, like, clear };