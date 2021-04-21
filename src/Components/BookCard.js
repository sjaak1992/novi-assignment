import React from 'react'

function BookCard (props){
    console.log(props.title)
    return (
        <>
        <li>{props.title}

        <button onClick={props.data}>
            add to list
        </button>

        </li>

        </>
            )

}

export default BookCard;
