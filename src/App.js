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
              console.log('currently reading: ', books.filter(book => book.shelf === "currentlyReading"))
              console.log('want to read: ', books.filter(book => book.shelf === "wantToRead"))
              console.log('read: ', books.filter(book => book.shelf === "read"))
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
        })
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
        <Search />
      )} />
      </div>
    )
  }
}

export default BooksApp
