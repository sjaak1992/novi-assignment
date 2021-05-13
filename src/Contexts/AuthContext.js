import React, {createContext, useState, useContext} from 'react'
import app from "../modules/firebase";

// const db = app.firestore();

const context = createContext();


const AuthContext = (props) => {



    const [appUser, setAppUser] = useState(undefined)
    // console.log("wat is appuser", appUser)


    async function register(email, password) {
        const response = await app.auth().createUserWithEmailAndPassword(email, password)
        // console.log('authentication response:', response)
        setAppUser(response.user)
    }

    async function login(email, password) {
        const response = await app.auth().signInWithEmailAndPassword(email, password)
        // console.log('authentication', response)
        setAppUser(response.user)

    }

    function logout (){
        app.auth().signOut();

    }


    return (

        <context.Provider
            value={{appUser, register, login, logout}}
        >
            {props.children}
        </context.Provider>
    )

}


export const useAuth = () => {
    return useContext(context);
}

export default AuthContext;