import React, { Component } from 'react';
import sortBy from 'sort-by'

class ListBooks extends Component {
	change = (book, e) => {
		if (this.props.onMoveCategory) {
      		this.props.onMoveCategory(book, e.target.value);
      	}
	}
	render() {

		const { books } = this.props 
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
							    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:'url(' + book.imageLinks.thumbnail + ')' }}></div>
							    <div className="book-shelf-changer">
							      <select onChange={(e) => this.change(book, e)} value={book.shelf}>
							        <option value="none" disabled>Move to...</option>
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
	            </div>
	        </div>
		)
	}
}

export default ListBooks