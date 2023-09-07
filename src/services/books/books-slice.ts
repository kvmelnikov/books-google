import { totalmem, type } from 'os'
import { TResponseSearchBook, TMakedBook, TDetailBook, TResponseDetailBook } from '../../types/types'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { makeDetailBook, makeBooks } from './books-utils'
import { stat } from 'fs'
import { MAX_RES } from '../../constants/api'
import { check } from 'prettier'

type TInitialState = {
  books: TMakedBook[]
  bookDetail: TDetailBook
  totalItems: number
  page: number
  checkAvialableBook: boolean
}

const initialState: TInitialState = {
  books: [],
  bookDetail: {
    id: '',
    image: '',
    title: '',
    category: '',
    authors: '',
    description: '',
  },
  totalItems: 0,
  page: 0,
  checkAvialableBook: true,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<TResponseSearchBook[]>) => {
      state.books = makeBooks(action.payload)
      state.page = state.page + 1
    },
    addedBooks: (state, action: PayloadAction<TResponseSearchBook[]>) => {
      const makedBooks = makeBooks(action.payload)
      makedBooks.length < 30 ? (state.checkAvialableBook = false) : (state.checkAvialableBook = true)
      state.books = state.books.concat(makeBooks(action.payload))
      state.page = state.page + 1
    },
    clearBooks: (state) => {
      state.books = []
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload
    },
    increasePage: (state) => {
      state.page = state.page + 1
    },
    setDetailBook: (state, action: PayloadAction<TResponseDetailBook>) => {
      state.bookDetail = makeDetailBook(action.payload)
    },

    clearDetailBook: (state) => {
      state.bookDetail = {
        id: '',
        image: '',
        title: '',
        category: '',
        authors: '',
        description: '',
      }
    },
  },
})

export const { clearBooks, clearDetailBook, increasePage, setBooks, setTotalItems, addedBooks, setDetailBook } =
  booksSlice.actions
export default booksSlice.reducer
