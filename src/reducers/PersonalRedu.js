const initialState = {
  userName: false,
  avatar: 'https://downfuture.com/user.png',
  listData: [],
  total: 0,
  count: 0,
  code: 0
};
const userRedu = (state = initialState, action) => {
  switch(action.type) {
    case 'PERSONALREDU':
      return Object.assign({}, state, action.data);
    break;
    case 'CLEARREDU':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}
export default userRedu;