import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {Main, Sidebar, Header, TabsBlock, Forms, Tables, Charts, Registration, Login} from '../components'

const DashboardLayout = () => {
  return (
    <>
      <Sidebar/>
      <Header/>
      <div className='main-container'>
        <div className='content'>
          <Switch>
            <Route path='/dashboard' exact component={Main}/>
            <Route path='/forms' exact component={Forms}/>
            <Route path='/tables' exact component={Tables}/>
            <Route path='/charts' exact component={Charts}/>
            <Route path='/auth/registration' exact component={Registration}/>
            <Route path='/auth/login' exact component={Login}/>
            <Route path='/tabs' exact component={TabsBlock}/>
            <Redirect from='/' to='/dashboard'/>
          </Switch>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
