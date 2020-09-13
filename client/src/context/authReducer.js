const initialState = {

    user: ""
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


export { firebaseReducer, initialState };