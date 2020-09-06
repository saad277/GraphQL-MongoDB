import React from 'react';

import { useQuery, gql } from '@apollo/client';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './Components/Nav'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Complete from './pages/auth/CompleteRegistration'

import { ToastContainer } from "react-toastify"




const App = () => {

  return (
    <>
      <Nav />
      <ToastContainer />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/CompleteRegister" component={Complete} />

      </Switch>
    </>
  )


}

export default App;
