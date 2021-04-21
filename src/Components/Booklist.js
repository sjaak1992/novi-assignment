import React, {useState, useEffect} from 'react'
import axios from "axios";


function Booklist() {

    const [query, setQuery] = useState('dahl')
    const [author, setAuthor] = useState([])
    const [books, setBooks] = useState([]);
    const [readingList, setReadingList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://openlibrary.org/search.json?author=${query}`)
            console.log(response.data)

            if (response.data.docs.length > 0) {
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

    console.log("Wat zit erin?", readingList);

    return (
        <>
            <div className="App">
                <h1>Books of my favourite author: </h1>
                <input value={query} onChange={e => setQuery(e.target.value)} type="search"/>
                <button onClick={fetchData}> Search</button>
            </div>

            <div>
                <ul>
                    {readingList.map((title) => {
                        console.log(title)
                        return <li>{title}</li>
                    })}
                </ul>

            </div>

            <div>
                <h2>{author && author}</h2>
                <p>{books && books.map((book) => {
                    // console.log(book)
                    return  <li>{book.title}<button onClick={() => setReadingList([...readingList, book.title])}>Add to list</button> </li>
                })} </p>
            </div>

        </>

    );
}

export default Booklist;



