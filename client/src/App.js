import React, { useContext } from 'react';

import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider, ApolloLink, concat } from '@apollo/client';

import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Nav from './Components/Nav'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Complete from './pages/auth/CompleteRegistration'

import { ToastContainer } from "react-toastify"


import { AuthContext } from './context/authContext'


const App = () => {


  const { state } = useContext(AuthContext)

  const { user } = state

  const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphQl",

  })

  const authMiddleware = new ApolloLink((operation, forward) => {

    operation.setContext({

      headers: {

        authtoken: user ? user.token : ""
      }
    })

    return forward(operation);

  })

  const client = new ApolloClient({
    link: concat(authMiddleware,httpLink),
 
    cache: new InMemoryCache(),

  })




  return (
    <ApolloProvider client={client}>
      <Nav />
      <ToastContainer />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/CompleteRegister" component={Complete} />

      </Switch>
    </ApolloProvider>
  )


}

export default App;
