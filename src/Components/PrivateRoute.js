import React from 'react'
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext";


function PrivateRoute (props){

    const {appUser} = useAuth()


    return (
        <Route path={props.path}>
            { appUser ? props.children : <Redirect to="/login"/>}
        </Route>
    )
}

export default PrivateRoute;