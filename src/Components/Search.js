import React, {Component} from "react";
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from "./Book";
class Search extends Component {
  state = {
    searchBooks : [],
    type: ''
  }
  handleSearch = e => {
    this.setState({ type : e });
    if(!e.length) {
      this.setState({ searchBooks: [] })
    } else {
      BooksAPI.search(e)
      .then(books => {
        books.error ? this.setState({ searchBooks: [] }) :this.setState({ searchBooks: books })
      }).catch(this.setState({ searchBooks: [] }));
    }
    
  };
    render() {
      const {searchBooks,type} = this.state;
      const {books, handlebookshelf} = this.props;
      for(let searchBook of searchBooks) {
        if(!searchBook.shelf){
            searchBook.shelf = 'none';
        }
        for (let book of books) {
          if (book.id === searchBook.id) {
            searchBook.shelf = book.shelf;
          }
        }
      }
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/' className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={type} onChange={(e) => this.handleSearch(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {searchBooks.map(book => (
              <Book key={book.id} book={book} handlebookshelf={handlebookshelf} />
            ))}

              </ol>
            </div>
          </div>
        )
    }
}

export default Search;