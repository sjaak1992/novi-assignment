// to do Context:

// [x] - create context
// [x] - context provider:
// [x]- values en functies doorgeven
// - (eigen hook maken)
// [] - useState
// [x] - wrappen maken
// [x] - children renderen
// [x] - wrapper gebruiken in app

import React, {createContext, useState, useContext} from 'react'
import app from "../modules/firebase";


const context = createContext();



const AuthContext = (props) => {

    const [userIntent, setUserIntent] = useState('Register')
    const [appUser, setAppUser] = useState(undefined)

    async function onSubmit(event) {
        event.preventDefault()
        // console.log(event) // -> target
        const [email, password] = event.target  //uit het event halen we uit target email en password
        // console.log(email.value, password.value); // waarden eruit halen
        //firebase account koppelen(code staat in documentatie), dit is een promise - dus functie omzetten naar async functie


        if (userIntent === 'Register') {
            const response = await app.auth().createUserWithEmailAndPassword(email.value, password.value)
            console.log('authentication response:', response)
            setAppUser( response.user )
        } else {
            const response = await app.auth().signInWithEmailAndPassword(email.value, password.value)
            console.log('authentication', response)
            setAppUser( response.user )
        }
    }



    return (

     <context.Provider
     value={{userIntent, setUserIntent, appUser, setAppUser, onSubmit}}
     >

         {props.children}
     </context.Provider>
    )

}


export const useAuth = () => {
    return useContext(context);
}

export default AuthContext;