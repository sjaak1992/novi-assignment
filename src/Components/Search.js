import React from "react";

function Search (props){
    return (
        <>
        <input value={props.value} onChange={props.change}/>
        <button onClick={props.data} >Search</button>
        </>
            )
}

export default Search;