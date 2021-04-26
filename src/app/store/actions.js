import { data } from '../data/data';

const login = {
  "username":"hruday@gmail.com",
  "password" :'hruday123'
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const loginFailure = data => ({
  type: LOGIN_FAILURE,
  data
});

export const getData = (payload) => {
  if (payload.username === login.username && payload.password === login.password) {
    return loginSuccess(data);
  } else {
    const errorMsg = { 'error': 'User is Not Valid' };
    return loginFailure(errorMsg);
  }
}
