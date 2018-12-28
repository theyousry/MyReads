import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

  static propTypes = {
      books: PropTypes.array.isRequired,
      updateShelf: PropTypes.func.isRequired };

    render() {
      const { books, updateShelf } = this.props
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.section}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    books && books.map((book) => {
                         return (
                              <Book
                                   book={book}
                                   key={book.id}
                                   updateShelf={updateShelf}
                              />
                         )
                    })
               }
                </ol>
            </div>
        </div>
        )
    }
}

export default Shelf
