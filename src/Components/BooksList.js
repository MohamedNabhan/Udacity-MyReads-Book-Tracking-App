import React from "react";
import SearchButton from "./SearchButton";
import BookShelf from "./BookShelf";
const BooksList = (props) => {
      // Destraction props
      const {books,shelvs,handlebookshelf} = props
      // Filter Books based on book.shelf 
      const handleFilterBooks = shelf => books.filter(book => shelf.type ===  book.shelf )
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelvs.map(shelf => <BookShelf key={shelf.type} books={handleFilterBooks(shelf)}  name={shelf.name} handlebookshelf={handlebookshelf} />)}
              </div>
            </div>
              <SearchButton/>
          </div>
         
        )
    }

export default BooksList;