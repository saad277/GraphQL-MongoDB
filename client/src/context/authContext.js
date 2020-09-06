import React, { useReducer, createContext, useEffect } from 'react'

import { firebase } from '../firebase'

const initialState = {

    user: "test"
}


const firebaseReducer = (state, action) => {


    switch (action.type) {
        case "LOGGED_IN_USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }

}


const AuthContext = createContext();


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


export { AuthContext, AuthProvider }