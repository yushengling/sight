const passwordChangeA = (dispatch, count) => {
  dispatch({
    type:'PASSWORDCHANGE_SAGA',
    count
  });
}

const getAvatarA = (dispatch) => {
  dispatch({
    type: 'GETSETTINGAVATAR_SAGA'
  });
}
export { passwordChangeA, getAvatarA };