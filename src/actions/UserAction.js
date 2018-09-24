const register = (dispatch, values) => {
  dispatch({
    type:'REGISTER_SAGA',
    values
  });
}

const clear = (dispatch) => {
  dispatch({
    type:'CLEARREDU'
  });
}

const updatePassword = (dispatch, values) => {
  dispatch({
    type:'UPDATEPASSWORD_SAGA',
    values
  });
}

const login = (dispatch, values) => {
  dispatch({
    type:'LOGIN_SAGA',
    values
  });
}

const tips = (dispatch, tipsArray) => {
  dispatch({
    type: 'SEND_TIPS',
    tipsArray
  });
}

export {
  register,
  clear,
  updatePassword,
  login,
  tips
};