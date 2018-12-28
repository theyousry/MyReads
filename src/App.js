import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './Search'
import Main from './Main'

class BooksApp extends Component {

  state = {
    books: []
}

    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState( { books } )
    }

    updateShelf = (book, shelf) => {
       BooksAPI.update(book, shelf)
        .then((response) => {
          book.shelf = shelf;
          this.setState((state) => ({
            books: state.books.filter((x) => {
              return (x.id !== book.id)
            }).concat([book])
          }))
        }).then(() => shelf !== 'none' ? alert(`${book.title} HAS BEEN MOVED!`) : null)
      }
  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <Main
          books={this.state.books}
          updateShelf={this.updateShelf}
        />
      )} />
      <Route path='/search' render={() => (
        <Search
        books={this.state.books}
        updateShelf={this.updateShelf}
        />
      )} />
      </div>
    )
  }
}

export default BooksApp
