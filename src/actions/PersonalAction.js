const getAvatarA = (dispatch) => {
  dispatch({
    type:'GETAVATAR_SAGA'
  });
}

const uploadImagesA = (dispatch, formData) => {
  dispatch({
    type: 'UPLOADIMAGES_SAGA',
    formData
  });
}

const uploadAvatarA = (dispatch, formData) => {
  dispatch({
    type: 'UPLOADAVATAR_SAGA',
    formData
  });
}
export { getAvatarA, uploadImagesA, uploadAvatarA };