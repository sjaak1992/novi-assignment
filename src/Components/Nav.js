import React from 'react';
import {Link} from 'react-router-dom'
import "./Nav.css"
import {BiExit} from 'react-icons/bi'
import {useAuth} from "../Contexts/AuthContext";


function Nav() {

    const {logout, appUser} = useAuth();

    return (
        <>
            <div className="logo"> BOOKCLUB</div>
            <nav>

                <ul className="nav-links">
                    <Link
                        to='/'
                        className="text-link">
                        <li>home</li>
                    </Link>

                    <Link
                        to='/profile'
                        className="text-link">
                        <li>profile</li>
                    </Link>

                    <Link
                        to='/login'
                        className="text-link">
                        <li>login</li>
                    </Link>

                    {appUser &&
                    <Link
                        to='/reading-list'
                        className="text-link">
                        <li>books</li>
                    </Link>
                    }


                    <Link
                        to='/logout'
                    >
                        <li>
                            <button
                                className="nav-exit-icon"
                                onClick={logout}><BiExit/></button>
                        </li>
                    </Link>


                </ul>


            </nav>
        </>
    );
}

export default Nav;