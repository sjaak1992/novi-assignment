import React, {createContext, useState, useContext, useEffect} from 'react'
import app from "../modules/firebase";


const context = createContext();



const AuthContext = (props) => {

    const [appUser, setAppUser] = useState(null)


    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
                setAppUser(user)
            }
        });

    },[])


    async function register(email, password) {
        const response = await app.auth().createUserWithEmailAndPassword(email, password)
        setAppUser(response.user)
    }

    async function login(email, password) {
        const response = await app.auth().signInWithEmailAndPassword(email, password)
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