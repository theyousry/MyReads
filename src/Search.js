import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'


class Search extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

    state = {
     books: [],
     query: ''
   }

     handleChange = async e => {
      const query = e.target.value.trim()
      this.setState( { query } )

       if (query === '' || query === undefined) {
            return this.setState({
               books: []
             })
           }
      else {
            const results = await BooksAPI.search(query)
            this.setState( { books: results } )
           }
      }

    render() {

      const { updateShelf } = this.props;
      const { books } = this.state;

        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
              <input type="text"
                     placeholder="Search by title or author"
                     value={this.state.query}
                     onChange={this.handleChange}
                     />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.length > 0 && books.map(book =>
                <Book
                  book={book}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              )}
              </ol>
            </div>
          </div>
        )
    }
}

export default Search
