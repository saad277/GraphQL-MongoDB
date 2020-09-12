import React, { useState } from 'react'


import { firebase } from '../../firebase'

import { toast } from 'react-toastify';

import AuthForm from '../../Components/forms/AuthForm'

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
        <div className="container p-5 ">

            {loading ? (<h4 className="text-danger">Loading</h4>) : (<h4>Register</h4>)}



            <AuthForm email={email} loading={loading} setEmail={setEmail} handleSubmit={handleSubmit} />


        </div>
    )

}

export default Register;