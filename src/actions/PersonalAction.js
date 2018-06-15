const getAvatar = (dispatch) => {
  dispatch({
    type:'GETAVATAR_SAGA'
  });
}

const uploadImages = (dispatch, formData) => {
  dispatch({
    type: 'UPLOADIMAGES_SAGA',
    formData
  });
}

export { getAvatar, uploadImages };