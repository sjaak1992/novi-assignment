import React from 'react'
import './BookCard.css';
import {isAlreadyAdded} from "../helpers/readinglist";
import {useReadingList} from "../Contexts/ReadingListContext";

function BookCard(props) {

    const {readingList} = useReadingList();
    const alreadyAdded = isAlreadyAdded(props.title, readingList)

    return (


        <button
            style={{backgroundColor: alreadyAdded ? "#5e7374" : "white"}}
            className="bookcard__button"
            onClick={props.data}>
            <img
                src={`http://covers.openlibrary.org/b/id/${props.id}-M.jpg`}
                alt="book-cover"
                className="bookcard--image"
            />
        </button>


    )

}

export default BookCard;
