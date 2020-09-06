import React from 'react';

import { useQuery, gql } from '@apollo/client';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './Components/Nav'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'





const App = () => {

  return (
    <>
      <Nav />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

      </Switch>
    </>
  )


}

export default App;
