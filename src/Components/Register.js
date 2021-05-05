import React, {useState} from "react";
import './Register.css'
import {useAuth} from "../Contexts/AuthContext";

function Register (){
    const { appUser, login, register } = useAuth();
    const [userIntent, setUserIntent] = useState('Register')

    async function onSubmit(event) {
        event.preventDefault()
        const [email, password] = event.target


        if (userIntent === 'Register') {
            register(email.value, password.value);

        } else {
            login(email.value, password.value);
        }
    }


    return (
        <>
            { !appUser &&

            <form onSubmit={onSubmit} // als er geen appuser wordt gevonden, laat formulier zien en anders h1 met welcome
                                className="register-form">
                <h2> { userIntent }</h2>

                { appUser && <h2> { appUser.email } </h2> }

                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button type="submit" value={ userIntent }>Submit
                </button>

                <button onClick={() => setUserIntent(userIntent === 'Register' ? 'Login' : 'Register' )} >
                    Or  {userIntent === 'Register' ? 'Login' : 'Register'}
                </button>

            </form>

            }


            { appUser && <h1> Welcome {appUser.email}</h1>}

        </>
    )

}




export default Register;
