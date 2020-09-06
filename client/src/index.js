import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider } from '@apollo/client'

import client from './ApolloClient/apolloClient'
import { AuthProvider } from './context/authContext'


import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>

    <ApolloProvider client={client}>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>

      </Router>

    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

