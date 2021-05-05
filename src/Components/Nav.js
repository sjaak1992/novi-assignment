import React from 'react';
import {Link} from 'react-router-dom'
import "./Nav.css"


function Nav() {

    return (
        <>
            <div className="logo"> BOOKCLUB </div>
            <nav>

            <ul className="nav-links">
                <Link
                    to='/home'
                    className="text-link">
                    <li>HOME</li>
                </Link>


                <Link
                    to='/register'
                    className="text-link">
                    <li>Login</li>
                </Link>

                <Link
                    to='/profile'
                    className="text-link">
                    <li>PROFILE</li>
                </Link>

                    <Link
                        to='/reading-list'
                        className="text-link">
                        <li>books</li>
                    </Link>

            </ul>

            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>


        </nav>
        </>
    );
}

export default Nav;