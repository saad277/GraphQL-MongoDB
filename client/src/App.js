import React from 'react';

import { useQuery, gql } from '@apollo/client';

import Home from './pages/Home'
import Nav from './Components/Nav'





const App = () => {

  return (
    <>
      <Nav />
      <Home />
    </>
  )


}

export default App;
