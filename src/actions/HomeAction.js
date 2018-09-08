const getData = (dispatch, count) => {
  dispatch({
    type:'GETDATA_SAGA',
    count
  });
}

const clear = (dispatch) => {
  dispatch({
    type: 'CLEARREDU'
  });
}

export {
  getData,
  clear
};