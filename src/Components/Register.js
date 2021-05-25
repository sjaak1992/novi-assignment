import React, {useState, useEffect} from "react";
import './Register.css'
import {useAuth} from "../Contexts/AuthContext";
import {useHistory} from "react-router-dom"
import app from '../modules/firebase'
import {Redirect} from 'react-router-dom'

//firebase config
const db = app.firestore();


function Register() {

    const {appUser, login, register, logout} = useAuth();
    const [userIntent, setUserIntent] = useState('Register')
    // const [error, setError] = useState('')

    const history = useHistory();

    // console.log("wat zit erin?", appUser)

    async function onSubmit(event) {
        //prevent reload
        event.preventDefault()
        console.log("ONSUMBIT?")

        //isolate email and password from event
        const [email, password] = event.target


        if (userIntent === 'Register') {
            register(email.value, password.value);

        } else {
            console.log("HALLO?")
            login(email.value, password.value);

        }
    }

    useEffect(() => {
        console.log("effect?", appUser)
        if (appUser) {
            console.log("redirect naar home")
            history.push("/")
        }


    }, [appUser])


    function toggleUserIntent(event){
        event.preventDefault()
        console.log("TOGGLE?")
        setUserIntent(userIntent === 'Register' ? 'Login' : 'Register')
    }


    return (
        <>

            <div className="register-form-container">
                {!appUser &&

                <form
                    onSubmit={onSubmit} // als er geen appuser wordt gevonden, laat formulier zien en anders h1 met welcome
                    className="register-form">
                    <h2> {userIntent} </h2>

                    {appUser && <h2> {appUser.email} </h2>}

                    {/*<input className="register-form--element" type="text" placeholder="firstname"/>*/}
                    <input className='register-form--element' type="email" placeholder="email"/>
                    <input className='register-form--element' type="password" placeholder="password"/>

                    <button className='register-form--element' type="submit" value={userIntent}>Submit
                    </button>

                    <button className='register-form--element'
                            onClick={toggleUserIntent}>
                        Or
                        {userIntent === 'Register' ? 'Login' : 'Register'}
                    </button>

                    {appUser && <h1> Welcome {appUser.email}</h1>}


                </form>


                }


            </div>


        </>
    )

}


export default Register;
