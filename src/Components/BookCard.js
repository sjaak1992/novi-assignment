import React from 'react'

function BookCard(props) {

    return (
        <>
            <li> {props.title}
                <button onClick={props.data}>
                    add to list
                </button>

            </li>

            <p> {props.firstline} </p>
            <img src={`http://covers.openlibrary.org/b/id/${props.id}-M.jpg`} alt="book-cover"/>


        </>


    )

}

export default BookCard;
