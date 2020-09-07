import React, { useState, useContext } from 'react'


import { AuthContext } from '../../context/authContext'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { firebase } from '../../firebase'



const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)


    const { dispatch } = useContext(AuthContext)

    let history = useHistory()


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

                    history.push("/")

                })

        } catch (error) {

            console.log(error)
            toast.error(error.message)
        }


    }


    return (
        <div className="container p-5">

            <h4>Login</h4>


            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label> Email Address </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Enter Email"

                    />
                </div>

                <div className="form-group">
                    <label> Password </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className="form-control"
                        placeholder="Enter Password"
                        disabled={loading}

                    />
                </div>

                <button className="btn btn-raised btn-primary">Submit</button>

            </form>

        </div>
    )

}

export default Login;