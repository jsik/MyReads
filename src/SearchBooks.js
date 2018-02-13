import React, { Component } from 'react'
import { Link, Route  } from 'react-router-dom'

class SearchBooks extends Component {
	static propTypes = {
    	
    }
	render() {
		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link to="/" className="close-search">Close</Link>
              		<div className="search-books-input-wrapper">
                		<input type="text" placeholder="Search by title or author"/>
              		</div>
            	</div>
            	<div className="search-books-results">
              	<ol className="books-grid"></ol>
            	</div>
          	</div>
		)
	}
}

export default SearchBooks