import React, {createContext, useState, useContext} from 'react'

const context = createContext();


const ReadingListContext = (props) => {
    const [readingList, setReadingList] = useState([])
    const [book, setBook] = useState({});



    return(
        <context.Provider
        value={{readingList, setReadingList, book, setBook}}
        >

            {props.children}


        </context.Provider>
    )
}


export const useReadingList = () => {
    return useContext(context)
}


export default ReadingListContext;

