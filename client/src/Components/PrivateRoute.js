

import React, { useContext, useEffect, useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'




const PrivateRoute = ({ children, ...rest }) => {

    const { state } = useContext(AuthContext)

    const [user, setUser] = useState(false)


    useEffect(() => {


        if (state.user) {
            setUser(true)
        }

    }, [state.user])


    const NavLinks = () => {


        return (

            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">
                            Profile
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/password/update">
                            Password
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/post/create">
                            Post
                           
                        </Link>
                    </li>
                </ul>
            </nav>
        )

    }


    const renderContent = () => {

        return (
            <div className="container-fluid pt-5">
                <div className="row">
                    <div className="col-md-4">

                        {NavLinks()}
                    </div>
                    <div className="col-md-8">
                        <Route {...rest} />
                    </div>
                </div>
            </div>
        )
    }

    return state.user ? renderContent() : <h4>Loading...</h4>

}


export default PrivateRoute