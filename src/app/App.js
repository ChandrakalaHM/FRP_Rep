import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { UserDetails } from "./pages/UserDetails";

export const App = (props) => {

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} render={routerProps => <Home {...props} {...routerProps}/>}/>
        <Route path='/login' component={Login} render={routerProps => <Login {...props} {...routerProps} />}/>
        <Route path='/user' component={UserDetails} render={routerProps => <UserDetails {...props} {...routerProps} />}/>
      </Switch>
    </Router>
  )
}


