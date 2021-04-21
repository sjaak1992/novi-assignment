import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import BookCard from "./Components/BookCard";


function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])


    const fetchData = useCallback(async function fetchData() {
        const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
        console.log(response.data)

        if (response.data.docs.length > 0) {
            setAuthor(response.data.docs[0].author_name[0])
            setBooks(response.data.docs)
        }

    }, [query])

    // used use Callback to remember the fetchdata function and to re-use it.
    //used docs.length to make sure an empty input will not crash


    useEffect(() => {

        fetchData();

    }, [fetchData])


    // async function fetchData(event) {
    //     const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
    //     setAuthor(response.data.docs[0].author_name[0])
    // }



    // console.log("Wat zit erin?", readingList);

    return (
        <>
            <h1>Books of my favourite author: </h1>
            <h2>{author && author}</h2>

            <div className="App">
                <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
                <button onClick={fetchData}> Search</button>
            </div>

            <div>
                <ul>
                    {readingList.map((title) => {
                        // console.log(title)
                        return <li key={title}>{title}</li>
                    })}
                </ul>
            </div>

            <div className="book-card-container">


                <p>
                    {books && books.map((book) => {
                    // console.log("HIER ZIT OOK EEN LOGJE", book)

                    return (
                        // <li key={book.key}>{book.title}
                        // <button onClick={() => setReadingList([...readingList, book.title])}>
                        //     Add to list
                        // </button>
                            <BookCard data={() => setReadingList([...readingList, book.title])} title={book.title} />
                        // </li>

                    )
                })}
                </p>
            </div>

        </>

    );

}

export default App;
