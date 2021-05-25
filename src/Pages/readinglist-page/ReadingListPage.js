import React, {useEffect, useState} from 'react'
import {useReadingList} from "../../Contexts/ReadingListContext";
import MyReadingList from "../../Components/MyReadingList";
import {useAuth} from "../../Contexts/AuthContext";
import app from "../../modules/firebase";


const db = app.firestore();

function ReadingListPage() {

    const {readingList, setReadingList} = useReadingList();
    const {appUser} = useAuth();
    const [error, setError] = useState(false);


    useEffect(() => {

        async function fetchUserData() {
            try {
                const response = await db.collection('users').doc(appUser.uid).collection("readinglist").get();
                // console.log(response.docs.map(doc => doc.data())) // readinglist die je terug krijgt
                setReadingList(response.docs.map(doc => doc.data()))


            } catch (error) {
                setError(true)
                console.error(error)
            }

        }

        fetchUserData();


    }, [appUser])
    // console.log(readingList)


    return (
        <>
            <div className="reading-list-container">
                <h2>MY READING LIST:</h2>

                {error && <p>WOOPS er ging iets mis! Try again :)</p>}

                <ul className="reading-list-item">
                    {readingList.map((readingListItem) => {
                        return (

                            <MyReadingList item={readingListItem}/>

                        )
                    })}
                </ul>

            </div>

        </>
    )
}


export default ReadingListPage;