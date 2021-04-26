import React, { Fragment } from 'react';
import { Header } from './Header';

export const Home = (props) => {
  return (
    <Fragment>
      <Header {...props}/>
      <div className="home">Home Page</div>
    </Fragment>
  )
}

