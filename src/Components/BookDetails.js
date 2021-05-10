import React from 'react'
import './BookDetails.css'
import {BiBookmarkPlus} from 'react-icons/bi'
import {useReadingList} from "../Contexts/ReadingListContext"
import app from "../modules/firebase";

///firebase config
const db = app.firestore(); // documentatie, firestore aanroepen


// nodig:
// user id (uid)


function BookDetails() {

    const {readingList, setReadingList, book} = useReadingList();


    //firebase:
    async function addToReadingList() {

        const readingListItem = {
            cover_i: book.cover_i,
            title: book.title,
            // first_sentence: book.first_sentence,
            author_name: book.author_name,
            author_key: book.author_key,
            key: book.key
        }
        db.collection('users').doc("1234").collection("readinglist").add(readingListItem);
        setReadingList([...readingList, readingListItem])

    }



        return (

            <>
                <div className="book-details-container">
                    <img
                        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                        alt="book-cover"
                        className="detail-image"

                    />

                    <div className="detail-info">
                        <h2>{book.author}</h2>
                        <p className="book-details__title">{book.title}</p>
                        <p className="first-sentence"> {book.first_sentence} </p>

                    </div>

                    <div className="detail-add">

                        <button className="add-button"
                                onClick={addToReadingList}>
                            <BiBookmarkPlus/>
                        </button>

                        <h2>ADD TO MY READING LIST</h2>

                    </div>
                </div>

            </>


        )



}
export default BookDetails;
