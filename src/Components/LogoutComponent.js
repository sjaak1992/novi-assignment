import React from 'react'
import Register from "./Register";
import {useAuth} from "../Contexts/AuthContext";
import './LogoutComponent.css'



function LogoutComponent() {
    const {appUser} = useAuth();

    return (
        <>
            <div >

                <div className="logout__container">
                {!appUser &&
                    <h2 className="logout--message">successfully logged out, come back soon?</h2>}
                </div>

                <Register/>


            </div>
        </>
    )
}

export default LogoutComponent;
