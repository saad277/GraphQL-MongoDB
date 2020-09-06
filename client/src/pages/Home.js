import React, { useState, useContext } from 'react';

import { useQuery, gql, useLazyQuery } from '@apollo/client';

import { AuthContext } from '../context/authContext'

import { useHistory } from 'react-router-dom'





const GET_ALL_POSTS = gql`
  query  {
    allPosts {
      id
      title
      description
    }
  }
`;

const Home = () => {

    const { data, loading, error } = useQuery(GET_ALL_POSTS)
    const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POSTS);

    const { state, dispatch } = useContext(AuthContext)

    let history=useHistory();


    console.log(data)

    return (


        <div className="container">
            <div className="row p-5">
                {data && data.allPosts.map((x) => {

                    return (
                        <div className="col-md-5" key={x.id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h4>{x.title}</h4>
                                    </div>
                                    <p className="card-text">{x.description}</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => fetchPosts()} className="btn-btn-raised btn-primary">Fetch POSTS</button>
        </div>



    )

}

export default Home;