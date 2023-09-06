import { configureStore } from '@reduxjs/toolkit'
import formSearchReducer from '../services/form-search/form-search-slice'
import bookReducer from '../services/books/books-slice'

export const store = configureStore({
  reducer: {
    formSearch: formSearchReducer,
    books: bookReducer
  },

  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
