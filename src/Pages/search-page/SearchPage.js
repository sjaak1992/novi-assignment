import React, {useState, useEffect, useCallback} from 'react'
import Search from "../../Components/Search";
import search_image from "../../assets/search_image.jpg";
import BookCarrousel from "../../Components/BookCarrousel";
import BookDetails from "../../Components/BookDetails";
import {useReadingList} from "../../Contexts/ReadingListContext";
import axios from "axios";



function SearchPage(){

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [authorProfile, setAuthorProfile] = useState([])

    const {setBook} = useReadingList();

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


        </>
    )
}

export default SearchPage;