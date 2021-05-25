import React from 'react'
import './BookDetails.css'
import {BiBookmarkPlus} from 'react-icons/bi'
import {useReadingList} from "../Contexts/ReadingListContext"
import app from "../modules/firebase";
import {useAuth} from "../Contexts/AuthContext";

///firebase config
const db = app.firestore(); // documentatie, firestore aanroepen



function BookDetails() {

    const {appUser, login, register} = useAuth();
    const {readingList, setReadingList, book} = useReadingList();

    // console.log("appuser?",appUser)
    //firebase:
    async function addToReadingList() {

        const readingListItem = {
            cover_i: book.cover_i,
            title: book.title,
            author_name: book.author_name,
            author_key: book.author_key,
            key: book.key

        }
        db.collection('users').doc(appUser.uid).collection("readinglist").add(readingListItem);
        setReadingList([...readingList, readingListItem])
    }

    console.log("wat is dit", book.author_name)

    return (

        <>
            <div className="book-details-container">
                <img
                    src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt="book-cover"
                    className="detail-image"

                />

                <div className="detail-info">
                    <h2>{book.author_name}</h2>
                    <p className="book-details__title">{book.title}</p>
                    <p className="first-sentence"> {book.first_sentence} </p>

                </div>


                <div className="detail-add">

                    {!appUser && <p className="login-message" > Log in to add book! </p>}
                    <button className="add-button"
                            disabled={appUser === null}
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
