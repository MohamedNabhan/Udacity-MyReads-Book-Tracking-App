import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import BooksList from './Components/BooksList';
import Search from './Components/Search';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  //Configure App State
  state = {
    books: [],
    shelvs: [
      {type:'currentlyReading',name:'Currently Reading'},
      {type:'wantToRead',name:'Want To Read'},
      {type:'read',name:'Read'}
    ]
  }
  // Fetch Data From API
  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books
      })
    })
  }
  handlebookshelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(() => {
				book.shelf = shelf;
				this.setState({
					books: this.state.books.filter((c) => c.id !== book.id).concat(book),
				});
			})
		
	};
  
  render() {
      // Destraction state
    const {books, shelvs} = this.state
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BooksList books={books} shelvs={shelvs} handlebookshelf={this.handlebookshelf}/>
            )} />
        <Route path="/search" render={() => (
            <Search books={books} handlebookshelf={this.handlebookshelf}/>
            )} />
      </div>
    )
  }
}

export default BooksApp
