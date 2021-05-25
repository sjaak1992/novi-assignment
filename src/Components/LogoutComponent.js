import React from 'react'
import Register from "./Register";
import {useAuth} from "../Contexts/AuthContext";


function LogoutComponent() {
    const {appUser} = useAuth();

    return (
        <>
            <div>
                {!appUser && <h2>You are now logged out.</h2>}

                {/*{!appUser && <Register/>}*/}

                <Register/>


            </div>
        </>
    )
}

export default LogoutComponent;
