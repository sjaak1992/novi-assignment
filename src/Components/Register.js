import React, {useState} from "react";
import './Register.css'
import {useAuth} from "../Contexts/AuthContext";
import {useHistory} from "react-router-dom"
import app from '../modules/firebase'

//firebase config
const db = app.firestore();


function Register() {

    const {appUser, login, register, logout} = useAuth();
    const [userIntent, setUserIntent] = useState('Register')
    const [error, setError] = useState('')

    const history = useHistory();


    async function onSubmit(event) {
        //prevent reload
        event.preventDefault()

        //isolate email and password from event
        const [email, password] = event.target


        if (userIntent === 'Register') {
            register(email.value, password.value);

        } else {
            login(email.value, password.value);
        }
    }


    async function handleLogout() {
        try {
            await logout()

        } catch (error) {
            setError('Failed to log out')
        }

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
                            onClick={() => setUserIntent(userIntent === 'Register' ? 'Login' : 'Register')}>
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
