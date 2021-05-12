import React, {useEffect} from 'react'
import {useReadingList} from "../../Contexts/ReadingListContext";
import MyReadingList from "../../Components/MyReadingList";
import {useAuth} from "../../Contexts/AuthContext";
import app from "../../modules/firebase";


const db = app.firestore();

function ReadingListPage (){

    const {readingList, setReadingList} = useReadingList();
    const {appUser, login, register} = useAuth();


    useEffect(() => {

            async function fetchUserData (){
                try {
                    const response = await db.collection('users').doc(appUser.uid).collection("readinglist").get();
                    // console.log(response.docs.map(doc => doc.data())) // readinglist die je terug krijgt
                    setReadingList(response.docs.map(doc => doc.data()))


                } catch (error){
                    console.error(error)
                }

            }
            fetchUserData();


        }, [appUser])

    console.log(readingList)
        return (
            <>
                <div className="reading-list-container">
                    <h2>MY READING LIST:</h2>

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