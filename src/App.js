import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
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
    // passing updates for each component
    updateShelf = (book, shelf) => {
       BooksAPI.update(book, shelf)
        .then((response) => {
          book.shelf = shelf;
          this.setState((state) => ({
            books: state.books.filter((x) => {
              return (x.id !== book.id)
            }).concat([book])
          }))
        }).catch(error => {
          console.log(error);
        })
      }
  render() {
    return (
      <div className="app">
      <Switch>
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
      <Route component={NoResults} />
      </Switch>
      </div>
    )
  }
}

// error page
const NoResults = ({ loc }) => (
  <div>
    <h3>There is no matches for <code>{loc.pathname}</code></h3>
  </div>
)

export default BooksApp
