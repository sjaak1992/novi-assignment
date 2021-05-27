import React from "react";
import './Search.css'
import {FcSearch} from 'react-icons/fc'


function Search(props) {


    return (
        <>
            <div className="search__container">

                <div className="search__container--left">

                    <div>
                    <h2>Find Books</h2>
                    <h2>By My Favorite Author.</h2>
                    </div>

                    <div className="search__box">
                    <input className='search__input' value={props.value} onChange={props.change}/>

                    <button
                        className="search__button"
                        onClick={props.clickHandler}>
                        <FcSearch/>
                    </button>

                    </div>

                </div>

                <div>
                    <img src={`http://covers.openlibrary.org/a/olid/${props.authorProfile}-M.jpg`}
                         alt="author-profile"
                         className="author__image"
                    />
                </div>

                <div className="search__container--right">

                    <img className="search__image" src={props.image} alt={props.alternative}/>
                </div>
            </div>

        </>
    )
}

export default Search;