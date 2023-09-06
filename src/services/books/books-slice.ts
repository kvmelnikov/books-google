import { type } from "os"
import { TMakedBooks } from "../../types/types"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from '@reduxjs/toolkit'

type TInitialState = {
    books?: TMakedBooks[]
    bookDetail?: TMakedBooks
}

const initialState: TInitialState = {
    books: [],
    bookDetail: {}
}

type Response = {
    id: string
    volumeInfo: {
        authors: string[]
        categories: string[]
        title: string
        imageLinks: {
            smallThumbnail: string
            thumbnail: string
        }
    }
}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action: PayloadAction<Response[]>) =>{
            console.log(action.payload)
            // state.books = action.payload
         }
          
}})


export const { setBooks} = booksSlice.actions
export default booksSlice.reducer