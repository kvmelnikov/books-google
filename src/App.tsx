import React from 'react'
import logo from './logo.svg'
import Form from 'react-bootstrap/Form'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './components/main-page/main-page'
import { BooksList } from './components/books-list/books-list'
import { BookDetail } from './components/book-detail/book-detail'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const home = '/'
  const detailBook = '/books/:title'

  return (
    <Routes>
      <Route path={home} element={<MainPage />}>
        <Route path={home} element={<BooksList />} />
        <Route path={detailBook} element={<BookDetail />} />
      </Route>
    </Routes>
  )
}

export default App
