import { compose, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { METHODS } from "http";
import { addedBooks, clearBooks, clearDetailBook, setBooks, setDetailBook, setTotalItems } from "../books/books-slice";
import { BASE_URL, MAX_RES } from "../../constants/api";
import { clearSearchForm } from "./form-search-slice";
export const API_KEY = 'AIzaSyB0mLN0Sofak2oVtSp8JvK4-W4AWjA6kIY'

//TODO ПОЧИНИТЬ ALL
//TODO ПОЧИНИТЬ API_KEY ENV

export const formSearchRequest = createAsyncThunk<void, number | void,  { rejectValue: string; state: RootState }>(
    'formSearch/formSearchRequest',
    async(page: void | number = 0, thunkApi) =>{
            const category = thunkApi.getState().formSearch.fields.category
            const orderBy = thunkApi.getState().formSearch.fields.sorting
            const searchTerm = thunkApi.getState().formSearch.fields.searchTerm
            let startIndex: number = 0
            page ? startIndex = MAX_RES * page : thunkApi.dispatch(clearBooks())

            const response = await fetch(`${BASE_URL}volumes?q=${searchTerm.value}+subject:${category.value}&maxResults=${MAX_RES}&startIndex=${startIndex}&orderBy=${orderBy.value}&key=${API_KEY}`)
            .then((res) => {
                if(res.ok) {      
                    return res.json()
                }
                return thunkApi.rejectWithValue('Error request')
            }).then((data)=>{
                console.log(data)
                page ? thunkApi.dispatch(addedBooks(data.items)) : thunkApi.dispatch(setBooks(data.items))
                thunkApi.dispatch(setTotalItems(data.totalItems))
            })
            .catch((err)=> thunkApi.rejectWithValue('Error request'))      
    }
)

export const getDetailBook = createAsyncThunk<void, string,  { rejectValue: string; state: RootState }>(
    'formSearch/getDetailBook',
     async(link, thunkApi) =>{
        thunkApi.dispatch(clearBooks())
        thunkApi.dispatch(clearDetailBook())
        const response = await fetch(link).then((res)=> {
            if(res.ok) {
                return res.json()
            }
            return thunkApi.rejectWithValue('Error request')

        }).then((data)=>{
            thunkApi.dispatch(setDetailBook(data))
            
        }).catch((err) => thunkApi.rejectWithValue('Error request'))
     }

)

