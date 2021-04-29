import React from 'react';
import {Link} from 'react-router-dom'
import "./Nav.css"


function Nav() {

    return (
        <nav className="nav-bar">
            <h1 className="logo">THE BOOKCLUB</h1>

            <div className="nav-links">
            <ul >
                <Link
                    to='/home'
                    classname="text-link">
                    <li>HOME</li>
                </Link>


                <Link
                    to='/login'
                    classname="text-link">
                    <li>LOGIN</li>
                </Link>

                <Link
                    to='/profile'
                    classname="text-link">
                    <li>PROFILE</li>
                </Link>

                    <Link
                        to='/reading-list'
                        classname="text-link">
                        <li>READING LIST</li>
                    </Link>




            </ul>
            </div>
        </nav>
    );
}

export default Nav;