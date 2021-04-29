import React, {useCallback, useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import BookDetails from "./Components/BookDetails";
import MyReadingList from "./Components/MyReadingList";
import BookCarrousel from "./Components/BookCarrousel";
import Search from "./Components/Search";
import search_image from "./assets/search_image.jpg";




function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])
    const [authorProfile, setAuthorProfile] = useState([])
    const [book, setBook] = useState({});

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

                <div className="app-container-left">
                    <h1 className="logo">THE BOOKCLUB</h1>
                </div>



                <div className="App">
                    <Search data={fetchData}
                            value={query}
                            change={e => setQuery(e.target.value)}
                            image={search_image}
                            alternative="search-image"
                            authorProfile={authorProfile}

                    />


                </div>


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



                <div className="reading-list-container">
                    <h2>MY READING LIST:</h2>

                    <ul>
                        {readingList.map((title) => {
                            return (

                                <MyReadingList item={title} />

                            )
                        })}
                    </ul>
                </div>






            </div>
        </>

    );

}

export default App;
