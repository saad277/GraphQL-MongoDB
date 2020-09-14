import React, { useState, Fragment } from 'react'


import { firebase } from '../../firebase'
import { toast } from 'react-toastify'

import AuthForm from '../../Components/forms/AuthForm'

const PasswordUpdate = () => {

    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)


    const handleSubmit = (event) => {

        event.preventDefault();

        setLoading(true)

        firebase.auth().currentUser.updatePassword(password)
            .then(() => {

                setLoading(false)
                toast.success("Password Updated")

            }).catch((error) => {

                setLoading(false)
                toast.error(error.message)
            })

    }

    return (

        <div className="container p-5">
            {loading ? <h4 className="text-danger">Loading...</h4> : <h4>Password Update</h4>}


            <AuthForm

                password={password}
                setPassword={setPassword}
                loading={loading}
                handleSubmit={handleSubmit}
                showPasswordInput={true}
                hideEmailInput={true}
            />
        </div>
    )
}

export default PasswordUpdate;