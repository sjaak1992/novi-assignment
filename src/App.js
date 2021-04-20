import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";

function App() {
    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
            console.log(response.data.docs)

            if (response.data.docs) {
                setAuthor(response.data.docs[0].author_name[0])
                // setBooks(response.data.docs[0].title)
                setBooks(response.data.docs)
            }

        }

        fetchData();

    }, [query])


    async function fetchData(event) {
        const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
        setAuthor(response.data.docs[0].author_name[0])
    }


    return (
        <>
            <div className="App">
                <h1>Books of my favourite author: </h1>
                <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
                <button onClick={fetchData}> Search</button>
            </div>

            <div>
                <p>{author && author}</p>
                <p>{books && books.map((book) => {
                    console.log(book)
                    return<p>{book.title}</p>
                })}</p>

            </div>
        </>

    );
}

export default App;
