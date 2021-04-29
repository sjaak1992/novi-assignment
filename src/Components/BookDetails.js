import React from 'react'
import './BookDetails.css'
import {BiBookmarkPlus} from 'react-icons/bi'


function BookDetails(props) {

    return (
        <>
<div className="book-details-container">
            <img
                src={`http://covers.openlibrary.org/b/id/${props.id}-M.jpg`}
                alt="book-cover"
                className="detail-image"

            />

            <div className="detail-info">
                <h2>{props.author}</h2>
                 <p>{props.title}</p>
                <p className="first-sentence"> {props.firstline} </p>

            </div>

            <div className="detail-add">

                <button className="add-button" onClick={props.data}><BiBookmarkPlus/></button>
                <h2>ADD TO MY READING LIST</h2>
            </div>
 </div>

        </>


    )

}



export default BookDetails;
