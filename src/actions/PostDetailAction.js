const getPostDetailA = (dispatch, postId) => {
  dispatch({
    type: 'GETPOSTDETAIL_SAGA',
    postId,
  });
}
export { 
  getPostDetailA
};