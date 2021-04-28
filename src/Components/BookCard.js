import React from 'react'
import './BookCard.css';

function BookCard(props) {

    return (


        <button className="book-card" onClick={props.data}>
            <img src={`http://covers.openlibrary.org/b/id/${props.id}-M.jpg`} alt="book-cover"/>
        </button>


    )

}

export default BookCard;
