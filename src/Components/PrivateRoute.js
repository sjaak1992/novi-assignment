import React from 'react'
import {Route, Redirect} from "react-router-dom";
import {useAuth} from "../Contexts/AuthContext";



function PrivateRoute (props){
    // console.log(props)

    const {appUser} = useAuth()
    console.log("user?", appUser)


    return (
        <Route path={props.path}>
            { appUser ? props.children : <Redirect to="/login"/>}
        </Route>
    )
}

export default PrivateRoute;