import React, {useState, useEffect, useCallback} from 'react'
import Search from "../../Components/Search";
import search_image_best from "../../assets/search_image_best.jpeg"
import BookCarrousel from "../../Components/BookCarrousel";
import BookDetails from "../../Components/BookDetails";
import {useReadingList} from "../../Contexts/ReadingListContext";
import { Grid } from 'react-spinners-css';
import axios from "axios";
import './SearchPage.css'



function SearchPage() {

    const [query, setQuery] = useState('')
    const [inputText, setInputText] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [authorProfile, setAuthorProfile] = useState([])
    const [loading, setLoading] = useState(true)
    const {setBook} = useReadingList();


    const fetchData = useCallback(async function fetchData() {
        setLoading(true)
        const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)


        if (response.data.docs.length > 0) {
            setAuthor(response.data.docs[0].author_name[0])
            setBooks(response.data.docs)
            setAuthorProfile(response.data.docs[0].author_key[0])
        }
        setLoading(false)
    }, [query])


    useEffect(() => {

        fetchData();


    }, [fetchData])


    return (
        <>

            <Search clickHandler={() => setQuery(inputText)}
                    value={inputText}
                    change={e => setInputText(e.target.value)}
                    image={search_image_best}
                    alternative="search-image"
                    authorProfile={authorProfile}
            />

            {loading && <Grid color="#5e7374" size={200}/>}

            <BookCarrousel
                books={books}
                setBook={setBook}
            />


            <BookDetails/>

        </>
    )
}



export default SearchPage;