
import { firebaseReducer, initialState } from './authReducer'
import { AuthContext } from './authContext'

import React, { useReducer, useEffect } from 'react'


import { firebase } from '../firebase'


const AuthProvider = ({ children }) => {


    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const value = { state, dispatch }

    useEffect(() => {

        const unsubscribed = firebase.auth().onAuthStateChanged(async (user) => {



            if (user) {
                const idToken = await user.getIdTokenResult()

                console.log(idToken)

                dispatch({

                    type: "LOGGED_IN_USER",
                    payload: { email: user.email, token: idToken.token }
                })

            } else {

                dispatch({

                    type: "LOGGED_IN_USER",
                    payload: null
                })

            }
        })
    }, [])

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>

}


export default AuthProvider;