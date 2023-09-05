import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { METHODS } from "http";
export const API_KEY = 'AIzaSyDTLRVE-RndpU-XHqC_dtIA6fMfWdnhU4Y'
const BASE_URL = 'https://www.googleapis.com/books/v1/'

//:MARK СОКРАТИТЬ ЭТОТ ТИП
type TResponse =  {
    title: string
    authors: string[]
    publishedDate: string
    industryIdentifiers: [
        {
            type: string
            identifier: string
        }
    ],
    readingModes: {
        text: boolean
        image: boolean
    }

    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
    },
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    },
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

type TMakedBooks = {
    image: string
    title: string
    category: string[]
    authors: string[]
}

const makeListBooks = (arrayBook:TResponse[]) =>{
    const makedBooks: TMakedBooks[] | null = [] 
    arrayBook.forEach((el)=>{
        const temporaryBooks: TMakedBooks = { image: el.imageLinks.thumbnail, title: el.title, category: el.categories, authors: el.authors } 
        makedBooks.push(temporaryBooks)
    })
    return makedBooks
}


export const formSearchRequest = createAsyncThunk<boolean, void,  { rejectValue: string; state: RootState }>(
    'formSearch/formSearchRequest',
    async(_, thunkApi) =>{
        const category = thunkApi.getState().formSearch.fields.category
        const orderBy = thunkApi.getState().formSearch.fields.sorting
        console.log(category, orderBy)
        const response = await fetch(`${BASE_URL}volumes?q=${category.value}&orderBy=${orderBy.value}&key=${API_KEY}`)
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            return thunkApi.rejectWithValue('Error request')
        })
        .catch((err)=> {
            return thunkApi.rejectWithValue('Error request')
        })
        const books = response.items.map((el: any) =>{return el.volumeInfo} ) 
        const makedBooks =  makeListBooks(books)
    
        return true
    }
)