import React, {useCallback, useEffect, useState} from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import axios from "axios";
import BookDetails from "./Components/BookDetails";
import MyReadingList from "./Components/MyReadingList";
import BookCarrousel from "./Components/BookCarrousel";
import Search from "./Components/Search";
import search_image from "./assets/search_image.jpg";
import Nav from "./Components/Nav"
import app from './modules/firebase'


function App() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])
    const [authorProfile, setAuthorProfile] = useState([])
    const [book, setBook] = useState({});
    const [userIntent, setUserIntent] = useState('Register')
    const [appUser, setAppUser] = useState(undefined)

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


// FIREBASE:
    // firebase register

    async function onSubmit(event) {
        event.preventDefault()
        // console.log(event) // -> target
        const [email, password] = event.target  //uit het event halen we uit target email en password
        // console.log(email.value, password.value); // waarden eruit halen
        //firebase account koppelen(code staat in documentatie), dit is een promise - dus functie omzetten naar async functie


        if (userIntent === 'Register') {
            const response = await app.auth().createUserWithEmailAndPassword(email.value, password.value)
            console.log('authentication response:', response)
            setAppUser( response.user )
        } else {
            const response = await app.auth().signInWithEmailAndPassword(email.value, password.value)
            console.log('authentication', response)
            setAppUser( response.user )
        }


    }


    return (
        <>

            <div className="app-container">


                {/*<div className="app-container-left">*/}
                {/*    <h1 className="logo">THE BOOKCLUB</h1>*/}
                {/*</div>*/}


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



                    { !appUser && <form onSubmit={onSubmit} // als er geen appuser wordt gevonden, laat formulier zien en anders h1 met welcome
                          className="register-form">
                        <h2> { userIntent }</h2>

                        { appUser && <h2> { appUser.email } </h2> }

                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="submit" value={ userIntent }/>
                        <button onClick={() => setUserIntent(userIntent === 'Register' ? 'Login' : 'Register' )}>
                          Or  {userIntent === 'Register' ? 'Login' : 'Register'}
                        </button>
                    </form>}


                    { appUser && <h1> Welcome {appUser.email}</h1>}


                </div>
            </div>
        </>

    );

}

export default App;
