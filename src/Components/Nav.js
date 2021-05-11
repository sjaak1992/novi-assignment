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
                    to='/'
                    className="text-link">
                    <li>HOME</li>
                </Link>

                <Link
                    to='/profile'
                    className="text-link">
                    <li>PROFILE</li>
                </Link>

                <Link
                    to='/login'
                    className="text-link">
                    <li>LOGIN</li>
                </Link>


                    <Link
                        to='/reading-list'
                        className="text-link">
                        <li>books</li>
                    </Link>

            </ul>


        </nav>
        </>
    );
}

export default Nav;