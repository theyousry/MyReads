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
      results: [],
      query: '',
      books: []
   }

   async componentDidMount() {
    const books = await BooksAPI.getAll()
     this.setState( { books } )
   }

     handleChange = async e => {
       const query = e.target.value
      this.setState( { query } )

       if (query === '' || query === undefined) {
            return this.setState({
               results: []
             })
           }
      else {
        await BooksAPI.search(query).then(results => {
          if(!results || results.hasOwnProperty('error')) {
            this.setState({ results: [] })
          } else {
              for(let result of results){
                result.shelf = 'none'
                for(let book of this.state.books){
                  if(book.id === result.id){
                    result.shelf = book.shelf
                  }
                }
              }
            this.setState( { results } )
           }
      })
     }
}

    render() {

      const { updateShelf } = this.props;
      const { results } = this.state;

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
              {results.length > 0 ? results.map(book =>
                <Book
                  book={book}
                  key={book.id}
                  updateShelf={updateShelf}
                />
              ) : "THERE IS NO RESULTS HERE!"
            }
              </ol>
            </div>
          </div>
        )
    }
}

export default Search
