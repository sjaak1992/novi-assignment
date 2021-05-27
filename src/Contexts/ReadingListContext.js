import React, {createContext, useState, useContext, useEffect} from 'react'
import NotificationBadge from 'react-notification-badge';
import {useAuth} from "./AuthContext";
import app from "../modules/firebase";

const context = createContext();

const db = app.firestore();



const ReadingListContext = (props) => {
    const [readingList, setReadingList] = useState([])
    const [book, setBook] = useState({});
    const [error, setError] = useState(false);
    const {appUser} = useAuth();


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
//UserData wordt alleen aangeroepen wanneer er een appUser is ingelogd
        if(appUser){
            fetchUserData();
        }



    }, [appUser])
    // console.log(readingList)


    return(
        <context.Provider
        value={{readingList, setReadingList, book, setBook, error}}
        >

            {props.children}


        </context.Provider>
    )
}


export const useReadingList = () => {
    return useContext(context)
}


export default ReadingListContext;

