// to do Context:

// [x] - create context
// [x] - context provider:
// [x]- values en functies doorgeven
// [] - useState
// [x] - wrappen maken
// [x] - children renderen
// [x] - wrapper gebruiken in app
// - (eigen hook maken)

import React, {createContext, useState, useContext} from 'react'
import app from "../modules/firebase";


const context = createContext();

const AuthContext = (props) => {


    const [appUser, setAppUser] = useState(undefined)



    async function register(email, password) {
        const response = await app.auth().createUserWithEmailAndPassword(email, password)
        console.log('authentication response:', response)
        setAppUser(response.user)
    }

    async function login(email, password) {
        const response = await app.auth().signInWithEmailAndPassword(email, password)
        console.log('authentication', response)
        setAppUser(response.user)
    }


    return (

        <context.Provider
            value={{ appUser, register, login}}
        >

            {props.children}
        </context.Provider>
    )

}


export const useAuth = () => {
    return useContext(context);
}

export default AuthContext;