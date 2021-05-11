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
import {useReadingList} from "./Contexts/ReadingListContext";


function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [authorProfile, setAuthorProfile] = useState([])
    const {readingList, setBook} = useReadingList();


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


                            <BookDetails/>


                        </Route>

                        <Route path="/reading-list">
                            <div className="reading-list-container">
                                <h2>MY READING LIST:</h2>

                                <ul className="reading-list-item">
                                    {readingList.map((readingListItem) => {
                                        return (

                                            <MyReadingList item={readingListItem}/>

                                        )
                                    })}
                                </ul>
                            </div>
                        </Route>


                            <Route path="/login">

                                <Register />

                            </Route>

                    </Switch>


                </div>

            </div>
        </>

    );

}

export default App;
