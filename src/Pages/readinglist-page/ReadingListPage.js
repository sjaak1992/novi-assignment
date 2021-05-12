import React from 'react'
import {useReadingList} from "../../Contexts/ReadingListContext";
import MyReadingList from "../../Components/MyReadingList";


function ReadingListPage (){

    const {readingList} = useReadingList();

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