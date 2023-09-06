import { compose, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { METHODS } from "http";
import { TMakedBooks } from "../../types/types";
import { setBooks } from "../books/books-slice";
import { BASE_URL, MAX_RES } from "../../constants/api";
export const API_KEY = 'AIzaSyDTLRVE-RndpU-XHqC_dtIA6fMfWdnhU4Y'
//TODO СОКРАТИТЬ ЭТОТ ТИП

export const formSearchRequest = createAsyncThunk<boolean, void,  { rejectValue: string; state: RootState }>(
    'formSearch/formSearchRequest',
    async(_, thunkApi) =>{
            const category = thunkApi.getState().formSearch.fields.category
            const orderBy = thunkApi.getState().formSearch.fields.sorting
            const title = thunkApi.getState().formSearch.fields.name
            const page = thunkApi.getState().formSearch.page            
            const response = await fetch(`${BASE_URL}volumes?q=${title.value}+subject:${category.value}&maxResults=${MAX_RES}&startIndex=${page}&orderBy=${orderBy.value}&key=${API_KEY}`)
            .then((res) => {
                if(res.ok) {
                    return res.json()
                }
                return thunkApi.rejectWithValue('Error request')
            })
            .catch((err)=> {
                return thunkApi.rejectWithValue('Error request')
            })
    
            thunkApi.dispatch(setBooks(response.items))
            return true
    
    }
)