const GETDATA = 'GETDATA';
import { call, put } from 'redux-saga/effects';
const getData = (dispatch,count) => {
  dispatch({
    type:'GETDATA_ASYNC',
    count
  });
}

const collection = (dispatch) => {
  dispatch({
    type: 'COLLECTION_SAGA',
  });
}

const like = (dispatch, data) => {
  dispatch({
    type: 'LIKE_SAGA',
    data
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