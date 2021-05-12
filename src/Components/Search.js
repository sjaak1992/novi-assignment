import React from "react";
import './Search.css'
import {FcSearch} from 'react-icons/fc'


function Search(props) {


    return (
        <>
            <div className="container">

                <div className="left">

                    <div>
                    <h2>Find Books</h2>
                    <h2>By My Favorite Author.</h2>
                    </div>

                    <div >
                    <input className='search-input' value={props.value} onChange={props.change}/>

                    <button
                        className="search-button"
                        onClick={props.clickHandler}>
                        <FcSearch/>
                    </button>

                    </div>

                </div>


                <div className="right">

                    <div className="author-picture">
                        <img src={`http://covers.openlibrary.org/a/olid/${props.authorProfile}-M.jpg`}
                             alt="author-profile"/>
                    </div>

                    <img className="search-image" src={props.image} alt={props.alternative}/>

                </div>
            </div>

        </>
    )
}

export default Search;