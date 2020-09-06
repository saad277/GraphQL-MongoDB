import React, { useState, useEffect } from 'react'


import { firebase } from '../../firebase'

import { toast } from 'react-toastify';

import { useHistory } from 'react-router-dom'
import { auth } from 'firebase';



const Complete = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    useEffect(() => {

        setEmail(localStorage.getItem("emailForRegistration"))

    }, [history])



    const submitHandler = async (event) => {

        event.preventDefault();

        if (!email || !password) {

            toast.error("Email and password are required")

            return
        }

        try {

            const result = await firebase.auth().signInWithEmailLink(email, window.location.href)

            console.log(result)

            if(result.user.emailVerified){

                    window.localStorage.removeItem("emailForRegistration")

                    let user=firebase.auth().currentUser

                    await user.updatePassword(password)
            }

        } catch (error) {

            console.log(error)
            toast.error(error.message)
        }

    }


    return (
        <div className="container ">

            {loading ? (<h4 className="text-danger">Loading</h4>) : (<h4>Register</h4>)}




            <form onSubmit={submitHandler} >

                <div className="form-group">
                    <label> Email Address </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Enter Email"
                        disabled={true}

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

                <button type="submit" className="btn btn-raised btn-primary">Submit</button>

            </form>

        </div>

    )




}


export default Complete;