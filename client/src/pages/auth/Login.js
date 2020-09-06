import React, { useState } from 'react'






const Login = () => {

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)


    return (
        <div className="container ">

            <h4>Login</h4>

            
            <form onSubmit={() => { }}>

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

                <button className="btn btn-raised btn-primary">Submit</button>

            </form>

        </div>
    )

}

export default Login;