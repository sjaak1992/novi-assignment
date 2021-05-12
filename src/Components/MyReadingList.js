import React from "react";
import './MyReadingList.css'



function MyReadingList(props) {



    return (
        <>

            <li key={props.item.key}>{props.item.title}</li>
        </>
    )
}


export default MyReadingList;
