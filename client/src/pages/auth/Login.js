import React, { useState, useContext } from 'react'


import { AuthContext } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { firebase } from '../../firebase'

import { useMutation, gql } from '@apollo/client'


import AuthForm from '../../Components/forms/AuthForm'

const USER_CREATE = gql`

   mutation userCreate{
       userCreate{
                 username
                 email
       }
      
    }

`

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)



    const { dispatch } = useContext(AuthContext)

    let history = useHistory()

    const [userCreate] = useMutation(USER_CREATE)

    const handleSubmit = async (event) => {

        event.preventDefault();
        setLoading(true)

        try {

            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(async (result) => {

                    const { user } = result

                    const idToken = await user.getIdTokenResult()

                    dispatch({

                        type: "LOGGED_IN_USER",
                        payload: { email: user.email, token: idToken.token }
                    })

                    /// send to mongoDb
                    userCreate()
                    history.push("/")

                })

        } catch (error) {

            console.log(error)
            toast.error(error.message)
            setLoading(false)
        }


    }


    const googleLogin = () => {

        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(async (result) => {

                const { user } = result

                const idToken = await user.getIdTokenResult()

                dispatch({

                    type: "LOGGED_IN_USER",
                    payload: { email: user.email, token: idToken.token }
                })

                /// send to mongoDb
                userCreate()
                history.push("/")

            })
    }


    return (
        <div className="container p-5">

            {loading ? (<h4 className="text-danger">Loading</h4>) : (<h4>Login</h4>)}

            <button onClick={googleLogin} className="btn btn-raised btn-danger mt-5">Login With Google</button>

            <AuthForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                loading={loading}
                handleSubmit={handleSubmit}
                showPasswordInput={true} />

            <Link className="text-danger float-right" to="/password/forgot">Forgot Password</Link>


        </div>
    )

}

export default Login;