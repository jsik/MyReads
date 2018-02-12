import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
	static propTypes = {
    	
    }
	change = (book, e) => {
		if (this.props.onMoveCategory) {
      		this.props.onMoveCategory(book, e.target.value);
      	}
	}
	render() {

		const { books, shelfName } = this.props 
		let showingBooks = books

		showingBooks.sort(sortBy('name'))

		return (
			<div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					{showingBooks.map((book) => (
						<li key={book.id}>
							<div className="book">
							  <div className="book-top">
							    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'url(${book.imageLinks.thumbnail})' }}></div>
							    <div className="book-shelf-changer">
							      <select onChange={(e) => this.change(book, e)} value={book.shelf}>
							        <option value="none" disabled>Move to...</option>
							        <option value="currentlyReading" selected={book.shelf === "currentlyReading" ? "selected" : ""}>Currently Reading</option>
							        <option value="wantToRead" selected={book.shelf === "wantToRead" ? "selected" : ""}>Want to Read</option>
							        <option value="read" selected={book.shelf === "read" ? "selected" : ""}>Read</option>
							        <option value="none" selected={book.shelf === "none" ? "selected" : ""}>None</option>
							      </select>
							    </div>
							  </div>
							  <div className="book-title">{book.title}</div>
							  <div className="book-authors">{book.authors.join(", ")}</div>
							</div>
						</li>
		            ))}
		            </ol>
	            </div>
	        </div>
		)
	}
}

export default ListBooks