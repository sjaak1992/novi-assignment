import BookCard from "./BookCard";
import './BookCarrousel.css'

function BookCarrousel(props) {

    return (

        <div className="book-card-container">

            {props.books && props.books.map((book) => {
                return (

                    <BookCard data={() => props.setBook(book)}
                              id={book.cover_i}

                    />
                )
            })}

        </div>
    )
}


export default BookCarrousel;