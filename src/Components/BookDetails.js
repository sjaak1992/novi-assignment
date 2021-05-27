import React from 'react'
import './BookDetails.css'
import {BiBookmarkPlus} from 'react-icons/bi'
import {useReadingList} from "../Contexts/ReadingListContext"
import app from "../modules/firebase";
import {useAuth} from "../Contexts/AuthContext";
import {isAlreadyAdded} from "../Helpers/readinglist";

const db = app.firestore();



function BookDetails() {

    const {readingList, setReadingList, book} = useReadingList();
    const {appUser} = useAuth();


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
            <div className="bookdetails__container">
                <img
                    src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt="book-cover"
                    className="bookdetails--image"

                />

                <div className="bookdetails__info">
                    <h2>{book.author_name}</h2>
                    <p className="book-details__info--title">{book.title}</p>
                    <p className="bookdetails__info--sentence"> {book.first_sentence} </p>

                </div>


                <div className="bookdetails__container--add">

                    {!appUser && <p className="bookdetails__message--login"> Log in to add book! </p>}


                    {isAlreadyAdded(book.title, readingList) ? <p className="bookdetails__message--added">This book is already on your list!</p> : <>
                        <button className="bookdetails__button--add"
                                disabled={appUser === null}
                                onClick={addToReadingList}>
                            <BiBookmarkPlus/>
                        </button>
                        <h2>ADD TO MY READING LIST</h2>
                    </>}



                </div>
            </div>

        </>


    )


}

export default BookDetails;
