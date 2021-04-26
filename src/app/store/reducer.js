

import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../store/actions';

const userDetails = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess : true,
        UserDetails: action.data
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoginSuccess : false,
        UserDetails: action.data
      });
    default:
      return state;
  }
}
export default userDetails;
