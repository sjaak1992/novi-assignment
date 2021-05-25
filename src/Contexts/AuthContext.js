import React, {createContext, useState, useContext, useEffect} from 'react'
import app from "../modules/firebase";

const db = app.firestore();
const context = createContext();



const AuthContext = (props) => {

    const [appUser, setAppUser] = useState(null)

//to stay logged in

    useEffect(() => {
        //firebase is logged in
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log("USER?",user)
                //also make sure user is logged in by updating state
                setAppUser(user)

            } else {
                // No user is signed in.
                console.log("no user")
            }
        });

    },[])


    async function register(email, password) {
        const response = await app.auth().createUserWithEmailAndPassword(email, password)
        // console.log('authentication response:', response)
        setAppUser(response.user)
    }

    async function login(email, password) {
        const response = await app.auth().signInWithEmailAndPassword(email, password)
        console.log('authentication', response.user)
        setAppUser(response.user)

    }

    function logout (){
        app.auth().signOut();
        setAppUser(null)

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