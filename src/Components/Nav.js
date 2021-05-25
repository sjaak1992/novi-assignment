import React from 'react';
import {NavLink} from 'react-router-dom'
import "./Nav.css"
import {BiExit} from 'react-icons/bi'
import {useAuth} from "../Contexts/AuthContext";
import PrivateLink from "./PrivateLink";


function Nav() {

    const {logout, appUser} = useAuth();

    return (
        <>
            <div className="logo"> BOOKCLUB</div>
            <nav>

                <ul className="nav-links">
                    <NavLink
                        to='/'
                        className="text-link">
                        <li>home</li>
                    </NavLink>

                    <NavLink
                        to='/profile'
                        className="text-link">
                        <li>profile</li>
                    </NavLink>

                    {!appUser &&
                    <NavLink
                        to='/login'
                        className="text-link">
                        <li>login</li>
                    </NavLink>
                    }


                    <PrivateLink
                        to='/reading-list'
                        className="text-link">
                        <li>books</li>
                    </PrivateLink>


                    <PrivateLink
                        to='/logout'
                    >
                        <li>
                            <button
                                className="nav-exit-icon"
                                onClick={logout}><BiExit/></button>
                        </li>
                    </PrivateLink>

                </ul>


            </nav>
        </>
    );
}

export default Nav;