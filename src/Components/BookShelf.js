import React from "react";
import Book from "./Book";
const BookShelf = (props) => {
  const {books, name,handlebookshelf} = props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map(book =>  <Book key={book.id}  book={book} handlebookshelf={handlebookshelf}/>)}
          </ol>
        </div>
      </div>    
    )
}

export default BookShelf;