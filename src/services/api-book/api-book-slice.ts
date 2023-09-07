import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'
import { MAX_RES } from '../../constants/api'
import { TFormAction } from '../../types/types'
import { getBooks, getDetailBook } from './api-book-thunks'
import { stat } from 'fs'

type TInitialState = {
  requestBooks: boolean
  failedBooks: boolean
  successBooks: boolean
  requestDetailBook: boolean
  failedDetailBook: boolean
  successDetailBook: boolean
}

const initialState: TInitialState = {
  requestBooks: false,
  failedBooks: false,
  successBooks: false,
  requestDetailBook: false,
  failedDetailBook: false,
  successDetailBook: false,
}

const apiBookSlice = createSlice({
  name: 'apiBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.requestBooks = true
      })
      .addCase(getBooks.fulfilled, (state) => {
        state.requestBooks = false
        state.failedBooks = false
        state.successBooks = true
      })
      .addCase(getBooks.rejected, (state) => {
        state.successBooks = false
        state.requestBooks = false
        state.failedBooks = true
      })
      .addCase(getDetailBook.pending, (state) => {
        state.requestDetailBook = true
      })
      .addCase(getDetailBook.fulfilled, (state) => {
        state.requestDetailBook = false
        state.failedDetailBook = false
        state.successDetailBook = true
      })
      .addCase(getDetailBook.rejected, (state) => {
        state.successDetailBook = false
        state.requestDetailBook = false
        state.failedDetailBook = true
      })
  },
})

export default apiBookSlice.reducer
