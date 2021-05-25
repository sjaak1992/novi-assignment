import React from 'react'
import {NavLink} from 'react-router-dom'
import {useAuth} from "../Contexts/AuthContext";

function PrivateLink(props) {

    const {appUser} = useAuth()

    return (
        <>
            {appUser &&
            <NavLink className={props.className} to={props.to}>
                {props.children}
            </NavLink>
            }

        </>
    )
}

export default PrivateLink;

