import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import BookCard from "./Components/BookCard";
import MyReadingList from "./Components/MyReadingList";
import Search from "./Components/Search";


function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])
    const [authorProfile, setAuthorProfile] = useState([])

    const fetchData = useCallback (async function fetchData() {
        const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
        console.log(response)

        if (response.data.docs.length > 0) {
            setAuthor(response.data.docs[0].author_name[0])
            setBooks(response.data.docs)
            setAuthorProfile(response.data.docs[0].author_key[0])
        }

    }, [query])


    useEffect(() => {

        fetchData();

    }, [fetchData])


    return (
        <>
            <div className="App">
                <h1>Books of my favourite author: </h1>
                <h2>{author && author}</h2>
                <img src={`http://covers.openlibrary.org/a/olid/${authorProfile}-M.jpg`} alt="author-profile"/>


            </div>

            <div className="search">

                <Search data={fetchData}
                        value={query}
                        change={e => setQuery(e.target.value)} />

            </div>


            <div className="my-reading-list">

                <ul>
                    {readingList.map((title) => {
                        return (

                            <MyReadingList item={title} />

                        )
                    })}
                </ul>

            </div>


            <div className="book-card-container">

                <p>
                    {books && books.map((book) => {
                    // console.log("HIER ZIT OOK EEN LOGJE", book)

                    return (
                            <BookCard data={() => setReadingList([...readingList, book.title])}
                                      title={book.title}
                                      id={book.cover_i}
                                      firstline={book.first_sentence}
                                      author={book.author_key}
                            />
                    )
                })}
                </p>

            </div>

        </>

    );

}

export default App;
