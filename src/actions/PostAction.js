const getAvatarA = (dispatch, count) => {
  dispatch({
    type: 'GETPOSTAVATAR_SAGA',
    count
  });
}

const getPostDatasA = (dispatch, count) => {
  dispatch({
    type: 'GETPOSTDATAS_SAGA',
    count
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

const saveinputThemeValue = (dispatch, inputThemeValue, postRedu) => {
  dispatch({
    type: 'UPDATEINPUTTHEME_SAGA',
    inputThemeValue,
    postRedu
  }); 
}

const clearCode = (dispatch, postRedu) => {
  dispatch({
    type: 'CLEARCODE_SAGA',
    postRedu
  });
}
export { 
  getAvatarA,
  createTheme,
  saveSelectValue,
  saveinputThemeValue,
  clearCode,
  getPostDatasA
};