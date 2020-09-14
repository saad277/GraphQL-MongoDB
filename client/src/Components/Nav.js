import React, { useContext } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { AuthContext } from '../context/authContext'

import { firebase } from '../firebase'


const Nav = () => {

    const { state, dispatch } = useContext(AuthContext)

    let history = useHistory();


    const { user } = state

    const logout = async () => {


        await firebase.auth().signOut();

        dispatch({

            type: "LOGGED_IN_USER",
            payload: null
        })

        history.push("/login")

    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                        {state.user ? (<Link className="nav-link" >
                            <a onClick={() => logout()} className="nav-item nav-link">Logout</a>
                        </Link>) :
                            (<Link className="nav-link" to="/login">
                                <a className="nav-item nav-link">Login</a>
                            </Link>)}


                    </li>

                    {state.user ?
                        (<li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                <a className="nav-item nav-link">
                                    {user && user.email.split("@")[0]}
                                </a>
                            </Link>
                        </li>
                        ) : (null)}


                    {state.user ? (null) :
                        (<li className="nav-item">
                            <Link className="nav-link" to="/register">
                                <a className="nav-item nav-link">
                                    Register
                                </a>
                            </Link>
                        </li>
                        )}




                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )




}

export default Nav;