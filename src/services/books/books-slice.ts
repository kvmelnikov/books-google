import { type } from "os"
import { TResponseSearchBook, TMakedBook } from "../../types/types"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from '@reduxjs/toolkit'
import { act } from "react-dom/test-utils"
import { makedBooks } from "./books-utils"
import { stat } from "fs"

type TInitialState = {
    books: TMakedBook[]
    bookDetail?: TMakedBook
    totalItems: number
}

const initialState: TInitialState = {
    books: [],
    bookDetail: undefined,
    totalItems: 0
}

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<TResponseSearchBook[]>) =>{
            state.books = makedBooks(action.payload)
         },
        addedBooks: (state, action: PayloadAction<TResponseSearchBook[]>) =>{
            console.log(action.payload)
            state.books = state.books.concat(makedBooks(action.payload))
        },
        clearBooks: (state) =>{
            state.books = []
        },
        setTotalItems: (state, action: PayloadAction<number>) =>{
            state.totalItems = action.payload
        } 
        
          
}})


export const {clearBooks, setBooks, setTotalItems, addedBooks} = booksSlice.actions
export default booksSlice.reducer