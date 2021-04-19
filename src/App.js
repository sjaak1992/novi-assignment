import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {


    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([])
    const [description, setDescription] = useState([])


    useEffect(() =>{
        async function fetchData() {
            const response = await axios.get("https://openlibrary.org/authors/OL34184A.json")
            // console.log(response.data)
            setAuthor(response.data.name)
        }

        fetchData();

    },[])


    useEffect(() =>{
        async function fetchData() {
            const response = await axios.get("https://openlibrary.org/works/OL45883W.json")
            // console.log(response.data)
            setTitle(response.data.title)
            setDescription(response.data.description)
        }

        fetchData();

    },[])




    return (
        <>
            <div className="App">
             <h1>Book nr. One</h1>
                <h2>{title}</h2>
                <h3>{author}</h3>
                <p>{description}</p>


            </div>
        </>

    );
}

export default App;
