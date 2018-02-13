import React from 'react'
import { Link, Route  } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveToCategory = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(books => {
      book.shelf = newShelf
      this.setState(state => ({
        books: state.books.filter((b) => b.id !== book.id).concat([ book ])
      }))
    })
  }

  render() {
    let showingCategories = [{
      name: "Currently Reading",
      value: "currentlyReading"
    },{
      name: "Want to Read",
      value: "wantToRead"
    },{
      name: "Read",
      value: "read"
    }] 

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {showingCategories.map((category) => (
                  <ListBooks key={category.value} onMoveCategory={this.moveToCategory} shelfName={category.name} books={this.state.books.filter(book => book.shelf === category.value)}/>
                ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path="/search" render={(history) => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
