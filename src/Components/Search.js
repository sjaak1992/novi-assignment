import React from "react";
import './Search.css'

function Search (props){
    return (
        <>
            <div id="container">
                <div className="container-left">

        <input value={props.value} onChange={props.change}/>
        <button onClick={props.data} >Search</button>
                </div>


                <div className="container-right"></div>
            </div>
        </>
            )
}

export default Search;