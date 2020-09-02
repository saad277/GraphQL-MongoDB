import React from 'react';

import { useQuery, gql } from '@apollo/client';





const GET_ALL_POSTS = gql`
  query  {
    allPosts {
      id
      title
      description
    }
  }
`;

const App = () => {

  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data)

  return (


    <div className="container">
      <div className="row p-5">
        {data.allPosts.map((x) => {

          return (
            <div className="col-md-5" key={x.id}>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>{x.title}</h4>
                  </div>
                  <p className="card-text">{x.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>



  )

}

export default App;
