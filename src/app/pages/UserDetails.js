import React, { useState, useEffect, Fragment, useDebugValue } from 'react';
import { useSelector } from 'react-redux';
import { get, isEmpty, map } from 'lodash'
import { Header } from './Header';

export const UserDetails = (props) => {

  const { user, loginError, isLoggedIn } = useSelector(state => {
    return ({
      user: get(state, 'userDetails.UserDetails[0].user', {}),
      loginError: get(state, 'userDetails.UserDetails[0].error'),
      isLoggedIn : get(state, 'userDetails.isLoginSuccess', false),
    });
  });

  useEffect(() => {
    if (!isLoggedIn || !isEmpty(loginError)) {
      props.history.push('/login')
    }
  }, [isLoggedIn, loginError]);

  return (
    <Fragment>
      <Header {...props}/>
      <div className="user">
        <h1> User Details </h1>
        {map(user, userDet => {
          const { age, name, id, gender, phoneNo , email} = userDet;
          return (<div className="user-details-block">
            <div>Name:{name}</div>
            <div>ID:{id}</div>
            <div>Email:{email}</div>
            <div>Age:{age}</div>
            <div>Phone Num:{phoneNo}</div>
            <div>Gender:{gender}</div>
          </div>)
        })}
      </div>
    </Fragment>
  )
}
