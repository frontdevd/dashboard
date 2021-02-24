import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import ResetPassword from "../components/Auth/ResetPassword/ResetPassword";
import {Login} from "../components";
import Header from "../components/shared/Header";
import './layout.scss'

const LoginLayout = () => {
  return (
    <div className='auth-layout'>
      <Header/>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route exact path='/reset-password' component={ResetPassword}/>
        <Redirect to='/login'/>
      </Switch>
    </div>
  );
};

export default LoginLayout
