import React, {useCallback, useEffect, useState} from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import axios from "axios";
import BookDetails from "./Components/BookDetails";
import MyReadingList from "./Components/MyReadingList";
import BookCarrousel from "./Components/BookCarrousel";
import Search from "./Components/Search";
import Register from "./Components/Register";
import search_image from "./assets/search_image.jpg";
import Nav from "./Components/Nav"
import app from './modules/firebase'
import { useAuth } from "./Contexts/AuthContext";


function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])
    const [authorProfile, setAuthorProfile] = useState([])
    const [book, setBook] = useState({});







// OPENLIBRARY API data ophalen:

    const fetchData = useCallback(async function fetchData() {
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

            <div className="app-container">

                <div className="App">
                    <Nav/>
                    <Switch>

                        <Route exact path="/">

                            <Search data={fetchData}
                                    value={query}
                                    change={e => setQuery(e.target.value)}
                                    image={search_image}
                                    alternative="search-image"
                                    authorProfile={authorProfile}

                            />


                            <BookCarrousel
                                books={books}
                                setBook={setBook}
                            />

                            <div className="book-details">
                                <BookDetails data={() => setReadingList([...readingList, book.title])}
                                             title={book.title}
                                             id={book.cover_i}
                                             firstline={book.first_sentence}
                                             author={author}
                                />

                            </div>
                        </Route>

                        <Route path="/reading-list">
                            <div className="reading-list-container">
                                <h2>MY READING LIST:</h2>

                                <ul>
                                    {readingList.map((title) => {
                                        return (

                                            <MyReadingList item={title}/>

                                        )
                                    })}
                                </ul>
                            </div>
                        </Route>


                    </Switch>


                    <Register />



                </div>
            </div>
        </>

    );

}

export default App;
