import React, { Component } from 'react';

class ListBooks extends Component {
	change = (book, e) => {
		if (this.props.onMoveCategory) {
      		this.props.onMoveCategory(book, e.target.value);
      	}
	}

	getBookShelf(bookId) {
		var found = this.props.booksOnShelf.find((b) => b.id === bookId)
		if (found) {
			return found.shelf
		} 
		return "none"
	}

	render() {
		const { books } = this.props 
		return (
			<ol className="books-grid">
				{books.length > 0 && books.map((book) => (
					<li key={book.id}>
						<div className="book">
						  <div className="book-top">
						    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'url(' + book.imageLinks.thumbnail + ')' }}></div>
						    <div className="book-shelf-changer">
						      <select onChange={(e) => this.change(book, e)} value={book.shelf || this.getBookShelf(book.id)}>
						        <option value="" disabled>Move to...</option>
						        <option value="currentlyReading">Currently Reading</option>
						        <option value="wantToRead">Want to Read</option>
						        <option value="read">Read</option>
						        <option value="none">None</option>
						      </select>
						    </div>
						  </div>
						  <div className="book-title">{book.title}</div>
						  <div className="book-authors">{book.authors.join(", ")}</div>
						</div>
					</li>
	            ))}
	        </ol>
		)
	}
}

export default ListBooks