import React from "react";
import './MyReadingList.css'



function MyReadingList(props) {
    return (
        <>

            <li key={props.item}>{props.item}</li>
        </>
    )
}


export default MyReadingList;
