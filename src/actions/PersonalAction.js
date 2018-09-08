const getFirstImages = (dispatch, count) => {
  dispatch({
    type:'GETFIRSTIMAGES_SAGA',
    count
  });
}

const uploadImages = (dispatch, formData, count) => {
  dispatch({
    type: 'UPLOADIMAGES_SAGA',
    formData,
    count
  });
}

const uploadAvatar = (dispatch, formData) => {
  dispatch({
    type: 'UPLOADAVATAR_SAGA',
    formData
  });
}

const getImages = (dispatch, count) => {
  dispatch({
    type: 'GETIMAGES_SAGA',
    count
  });
}

const signOut = (dispatch) => {
  dispatch({
    type: 'SIGNOUT_SAGA'
  }); 
}
export {
  getFirstImages,
  uploadImages,
  uploadAvatar,
  getImages,
  signOut
};