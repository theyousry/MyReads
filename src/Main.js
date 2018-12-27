import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class Main extends Component {
    render() {
      const { books, updateShelf } = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <Shelf
                        section="Currently Reading"
                        books={books.filter((book) => book.shelf === 'currentlyReading'
                            )}
                        updateShelf={updateShelf}
                    />
                    <Shelf
                        section="Want to Read"
                        books={books.filter((book) => book.shelf === 'wantToRead'
                            )}
                        updateShelf={updateShelf}
                    />
                    <Shelf
                        section="Read"
                        books={books.filter((book) => book.shelf === 'currentlyReading'
                            )}
                        updateShelf={updateShelf}
                    />
                </div>
                </div>
                <div className="open-search">
                <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Main
