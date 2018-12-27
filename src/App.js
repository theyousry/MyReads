import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './Search'
import Main from './Main'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/' component ={Main} />
      <Route path='/search' render ={() => (
        <Search />
      )} />
      </div>
    )
  }
}

export default BooksApp
