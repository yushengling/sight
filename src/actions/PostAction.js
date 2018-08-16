const getAvatarA = (dispatch) => {
  dispatch({
    type: 'GETPOSTAVATAR_SAGA'
  });
}

const createTheme = (dispatch, datas) => {
  dispatch({
    type: 'CREATETHEME_SAGA',
    datas
  });
}

const saveSelectValue = (dispatch, editorSelectValue, postRedu) => {
  dispatch({
    type: 'UPDATESELECT_SAGA',
    editorSelectValue,
    postRedu
  }); 
}

const saveInputTitleValue = (dispatch, inputTitleValue, postRedu) => {
  dispatch({
    type: 'UPDATEINPUTTITLE_SAGA',
    inputTitleValue,
    postRedu
  }); 
}

const clearCode = (dispatch, postRedu) => {
  dispatch({
    type: 'CLEARCODE_SAGA',
    postRedu
  });
}
export { getAvatarA, createTheme, saveSelectValue, saveInputTitleValue, clearCode };