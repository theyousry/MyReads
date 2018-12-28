import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Shelf = ({books, section, updateShelf}) => {
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{section}</h2>
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
    Shelf.propTypes = {
        books: PropTypes.array.isRequired,
        section: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired }

export default Shelf
