import React, { useState } from 'react'
import { firebase } from '../../firebase'
import { toast } from 'react-toastify'
import AuthForm from '../../Components/forms/AuthForm'

const PasswordForgot = () => {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {

        event.preventDefault();

        setLoading(true)

        const config = {

            url: "http://localhost:3000/login",
            handleCodeInApp: true
        }

        await firebase.auth().sendPasswordResetEmail(email, config)
            .then(() => {

                setEmail("")
                setLoading(false)
                toast.success(`Email Sent To ${email} . Click to reset your password `)


            })
            .catch((error) => {

                setLoading(false)
                console.log("Error on password forgot Email", error)
            })

    }

    return (

        <div className="container p-5">
            {loading ? <h4 className="text-danger">Loading...</h4> : (<h4 > Forgot Password</h4>)}

            <AuthForm
                email={email}
                setEmail={setEmail}
                loading={loading}
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default PasswordForgot;