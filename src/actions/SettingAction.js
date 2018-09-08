const passwordChangeA = (dispatch, values) => {
  dispatch({
    type:'PASSWORDCHANGE_SAGA',
    values
  });
}

const clear = (dispatch) => {
  dispatch({
    type:'CLEARREDU'
  });
}
export {
  passwordChangeA,
  clear
};