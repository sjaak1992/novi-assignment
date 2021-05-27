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
            <div className="nav__logo"> BOOKCLUB</div>
            <nav className="nav__bar">

                <ul className="nav-links">
                    <NavLink
                        to='/'
                        className="nav__link--text"
                        activeClassName="selected"
                    >
                        <li>home</li>
                    </NavLink>

                    <NavLink
                        to='/profile'
                        activeClassName="selected"
                        >
                        <li className="nav__link--text">profile</li>
                    </NavLink>

                    {!appUser &&
                    <NavLink
                        to='/login'
                        activeClassName="selected"
                        className="nav__link--text">
                        <li>login</li>
                    </NavLink>
                    }


                    <PrivateLink
                        to='/reading-list'
                        className="nav__link--text">
                        <li>books</li>
                    </PrivateLink>


                    <PrivateLink
                        to='/logout'
                    >
                        <li>
                            <button
                                className="nav__icon--exit"
                                onClick={logout}><BiExit/></button>
                        </li>
                    </PrivateLink>

                </ul>


            </nav>
        </>
    );
}

export default Nav;