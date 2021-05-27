import BookCard from "./BookCard";
import './BookCarrousel.css'

function BookCarrousel(props) {

    return (

        <div className="bookcarrousel__container">

            {props.books && props.books.map((book) => {
                return (

                    <BookCard data={() => props.setBook(book)}
                              id={book.cover_i}
                              title={book.title}

                    />
                )
            })}

        </div>
    )
}


export default BookCarrousel;