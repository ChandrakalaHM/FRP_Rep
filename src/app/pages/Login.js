import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty, get } from 'lodash';

import { getData } from '../store/actions';
import { Header } from './Header';

export const Login = (props) => {

  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState({ emailError: '', password: '' });
  const [emailDidNotMatchError, setEmailError] = useState('');
  const { user, loginError, isLoggedIn } = useSelector(state => {
    return ({
      user: get(state, 'userDetails.UserDetails[0].user', {}),
      loginError: get(state, 'userDetails.UserDetails.error', ''),
      isLoggedIn : get(state, 'userDetails.isLoginSuccess', false),
    });
  });

  useEffect(() => {
    if (isLoggedIn && isEmpty(loginError)) {
      props.history.push('/user');
    } else if (!isEmpty(loginError)) {
      setEmailError(loginError);
    }
  }, [user, loginError, isLoggedIn]);

  const onEmailEnter = (e) => {
    setEmailId(e.target.value);
    setFormError(prevState => ({ ...prevState, emailError: '' }));
    setEmailError('');
  }

  const onPasswordEnter = (e) => {
    setPassword(e.target.value);
    setFormError(prevState => ({ ...prevState, password: '' }));
    setEmailError('');
  }

  const formSubmit = (e) => {
    const payload = {
      "username": emailId,
      "password" : password
    }

    if (isEmpty(emailId)) {
      setFormError(prevState => ({...prevState, emailError: 'This is required field' })) ;
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailId)) {
      setFormError(prevState => ({...prevState, emailError: 'Please Enter Valid Email id' })) ;
    }

    if (isEmpty(password)) {
      setFormError(prevState => ({...prevState, password: 'This is required field' })) ;
    }

    if (isEmpty(formError.emailError) && isEmpty(formError.password)) {
      dispatch(getData(payload));
    }
  }

  return (
    <div>
      <Header {...props} />
      <div className="login">
       {emailDidNotMatchError ? <div className='error'>{emailDidNotMatchError}</div>: null}
        <div>
          <div>
              <label>Email: </label>
              <input
                type='text'
                name='email'
                value={emailId}
                onChange={onEmailEnter}
              />
            {formError.emailError ? <div className="error">{formError.emailError}</div> : null}
            </div>
          </div>
          <div>
            <div>
              <label>Password: </label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onPasswordEnter}
              />
            {formError.password ? <div className="error">{formError.password}</div> : null}
            </div>
          </div>
          <button onClick={formSubmit}>Submit</button>
        </div>
    </div>
  )
}

