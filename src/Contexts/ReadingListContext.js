import React, {createContext, useState, useContext, useEffect} from 'react'
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
                setReadingList(response.docs.map(doc => doc.data()))


            } catch (error) {
                setError(true)
                console.error(error)
            }

        }


        if(appUser){
            fetchUserData();
        } else {
            setReadingList([])
            setBook({})
        }



    }, [appUser])



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

