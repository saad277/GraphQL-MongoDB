
import React from 'react'

const AuthForm = ({ email, password = "", loading, setEmail, setPassword, handleSubmit, showPasswordInput = false }) => {


    return (
        <form onSubmit={handleSubmit} className="mt-2">

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

            {showPasswordInput ? (
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
                </div>):null }

            <button className="btn btn-raised btn-primary">Submit</button>

        </form>
    )

}


export default AuthForm;