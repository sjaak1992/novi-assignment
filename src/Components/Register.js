import React from "react";
import './Register.css'

function Register (props){
    return (
        <>
            { !props.appUser &&

            <form onSubmit={props.data} // als er geen appuser wordt gevonden, laat formulier zien en anders h1 met welcome
                                className="register-form">
                <h2> { props.userIntent }</h2>

                { props.appUser && <h2> { props.appUser.email } </h2> }

                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button type="submit" value={ props.userIntent }>Submit
                </button>

                <button onClick={props.toggleUserIntent}>
                    Or  {props.userIntent === 'Register' ? 'Login' : 'Register'}
                </button>

            </form>

            }


            { props.appUser && <h1> Welcome {props.appUser.email}</h1>}

        </>
    )

}



export default Register;
