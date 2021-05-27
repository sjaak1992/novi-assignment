import React from 'react'
import {useReadingList} from "../../Contexts/ReadingListContext";
import MyReadingList from "../../Components/MyReadingList";



function ReadingListPage() {

    const {readingList, error} = useReadingList();
    console.log(readingList)

    return (
        <>
            <div className="readinglist__container">
                <h2 className="readinglist__title">MY READING LIST:</h2>

                {error && <p>WOOPS er ging iets mis! Try again :)</p>}

                <ul className="readinglist--item">
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