import React, { useState } from 'react'


import { firebase } from '../../firebase'

import { toast } from 'react-toastify';



const Register = () => {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)


    const handleSubmit = async (event) => {

        event.preventDefault()

        setLoading(true)
        const config = {
            url: "http://localhost:3000/completeRegister",
            handleCodeInApp: true
        }
        await firebase.auth().sendSignInLinkToEmail(email, config)
            .then(() => {


                window.localStorage.setItem("emailForRegistration", email)

                toast.success(`Email sent to ${email}.Click the link to complete your registration `)

                setEmail("")
                setLoading(false)
            })



    }


    return (
        <div className="container ">

            {loading ? (<h4 className="text-danger">Loading</h4>) : (<h4>Register</h4>)}

           


            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label> Email Address </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="form-control"
                        placeholder="Enter Email"
                        disabled={loading}

                    />
                </div>

                <button type="submit" className="btn btn-raised btn-primary">Submit</button>

            </form>

        </div>
    )

}

export default Register;