import React from 'react'
import './BookDetails.css'
import {BiBookmarkPlus} from 'react-icons/bi'
import {useReadingList} from "../Contexts/ReadingListContext"
import firebase from "../modules/firebase";


function BookDetails(props) {

    const {readingList, setReadingList, book} = useReadingList();
    // console.log(readingList, setReadingList, book)


    //firebase:

    function addToReadingList() {
        // oplossing nr. 1 (maak een aparte functie, die setReadinglist aanroept, met meegegeven argumenten)
        const readingListItem = {
            cover_i: book.cover_i,
            title: book.title,
            first_sentence: book.first_sentence,
            author_name: book.author_name,
            author_key: book.author_key,
            key: book.key
        }
        setReadingList([...readingList, readingListItem])
        console.log("Dit is boek?", book)
        console.log("dit is readinglist item", readingListItem)

        const readingListRef = firebase.database().ref("readinglist");


        readingListRef.push(readingListItem);
    }


// opslaan in firebase:
// cover_id
// first_sentence
    // book title
    //author_name
    //author_key
    //book.key


    return (

        <>
            <div className="book-details-container">
                <img
                    src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                    alt="book-cover"
                    className="detail-image"

                />

                <div className="detail-info">
                    <h2>{props.author}</h2>
                    <p className="book-details__title">{props.title}</p>
                    <p className="first-sentence"> {props.firstline} </p>

                </div>

                <div className="detail-add">


                    <button className="add-button"

                        // onClick={createReadingList}
                        // onClick={hallo([...readingList, book.title])}
                        // onChange={setReadingList([...readingList, book.title])}
                        //optie nr.2 arrow function die ervoor zorgt dat de onClick pas plaatsvind bij de click, setReadingList is nu een onderdeel van de functie def.
                            onClick={addToReadingList}
                    >
                        <BiBookmarkPlus/>
                    </button>

                    <h2>ADD TO MY READING LIST</h2>

                </div>
            </div>

        </>


    )

}


export default BookDetails;
