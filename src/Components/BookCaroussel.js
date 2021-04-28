import BookCard from "./BookCard";
import './BookCaroussel.css'

function BookCaroussel(props) {
    return <div className="book-card-container">


            {props.books && props.books.map((book) => {
                // console.log("HIER ZIT OOK EEN LOGJE", book)

                return (

                    <BookCard data={() => props.setBook(book)}
                              id={book.cover_i}

                    />
                )
            })}


    </div>
}

export default BookCaroussel;