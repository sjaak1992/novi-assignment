import React from 'react'
import './BookCard.css';
function BookCard(props) {

    return (
        <>

            <li> {props.title}
                <button onClick={props.data}>
                    add to list
                </button>

            </li>

            <p className="first-sentence"> {props.firstline} </p>
            <img src={`http://covers.openlibrary.org/b/id/${props.id}-M.jpg`} alt="book-cover"/>


        </>


    )

}

export default BookCard;
