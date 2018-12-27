import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
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
