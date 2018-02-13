import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    var q = query.trim();
    this.setState({ query: q })
    BooksAPI.search(q).then((books) => {
      if (books instanceof Array) {
        this.setState({ books })
      } else {
        this.setState(state => ({
          books: []
        }))
      }
    })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

	render() {
    const { query, books } = this.state
		return (
			<div className="search-books">
      	<div className="search-books-bar">
        		<Link to="/" className="close-search">Close</Link>
        		<div className="search-books-input-wrapper">
          		<input type="text" placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)} />
        		</div>
      	</div>
      	<div className="search-books-results">
        	<ListBooks key="search" onMoveCategory={this.moveToCategory} books={books}/>
      	</div>
        {query.length > 0 && books.length === 0 && (
          <div className='msg'>
            <span>No book is found</span>
          </div>
        )}
    	</div>
		)
	}
}

export default SearchBooks