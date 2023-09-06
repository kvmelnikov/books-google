import { compose, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { METHODS } from "http";
import { addedBooks, clearBooks, setBooks, setTotalItems } from "../books/books-slice";
import { BASE_URL, MAX_RES } from "../../constants/api";
export const API_KEY = 'AIzaSyDTLRVE-RndpU-XHqC_dtIA6fMfWdnhU4Y'

//TODO ПОЧИНИТЬ ALL
//TODO ПОЧИНИТЬ API_KEY VENV

export const formSearchRequest = createAsyncThunk<boolean, number | void,  { rejectValue: string; state: RootState }>(
    'formSearch/formSearchRequest',
    async(page: void | number = 0, thunkApi) =>{
            
            const category = thunkApi.getState().formSearch.fields.category
            const orderBy = thunkApi.getState().formSearch.fields.sorting
            const title = thunkApi.getState().formSearch.fields.name
            let startIndex: number = 0
            page ? startIndex  = MAX_RES * page : thunkApi.dispatch(clearBooks())
        
            const response = await fetch(`${BASE_URL}volumes?q=${title.value}+subject:${category.value}&maxResults=${MAX_RES}&startIndex=${startIndex}&orderBy=${orderBy.value}&key=${API_KEY}`)
            .then((res) => {
                if(res.ok) {      
                    return res.json()
                }
                return thunkApi.rejectWithValue('Error request')
            }).then((data)=>{
                console.log(data)
                console.log(page)
                page ? thunkApi.dispatch(addedBooks(data.items)) : thunkApi.dispatch(setBooks(data.items))
                thunkApi.dispatch(setTotalItems(data.totalItems))
            })
            .catch((err)=> {
                return thunkApi.rejectWithValue('Error request')
            })

            
            return true
    
    }
)