const initialState = {
  userName: false,
  avatar: false
};
const detailRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'DETAILREDU':
      return Object.assign({}, state, action.data);
    break;
    default:
      return state;
  }
}
export default detailRedu;