import {createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addedBooks, clearBooks, clearDetailBook, setBooks, setDetailBook, setTotalItems } from "../books/books-slice";
import { API_KEY, BASE_URL, MAX_RES } from "../../constants/api";
//export const API_KEY = 'AIzaSyCTSN1Fsj2WILNcnn5Qg-3zVqOwfssappE'

//TODO ПОЧИНИТЬ API_KEY ENV

export const getBooks = createAsyncThunk<void, number | void,  { rejectValue: string; state: RootState }>(
    'apiBook/getBooks',
    async(page: void | number = 0, thunkApi) =>{
        try {
            const category = thunkApi.getState().formSearch.fields.category
            const orderBy = thunkApi.getState().formSearch.fields.sorting
            const searchTerm = thunkApi.getState().formSearch.fields.searchTerm
            let startIndex: number = 0
            page ? startIndex = MAX_RES * page : thunkApi.dispatch(clearBooks())
            
            await fetch(`${BASE_URL}volumes?q=${searchTerm.value}+subject:${category.value}&maxResults=${MAX_RES}&startIndex=${startIndex}&orderBy=${orderBy.value}&key=${API_KEY}`)
            .then((res) => {
                if(res.ok) {      
                    return res.json()
                }
                return Promise.reject()
            }).then((data)=>{
                page ? thunkApi.dispatch(addedBooks(data.items)) : thunkApi.dispatch(setBooks(data.items))
                thunkApi.dispatch(setTotalItems(data.totalItems))
            })
            .catch((err)=> Promise.reject())      
           
        } catch (error) {
                return thunkApi.rejectWithValue('Error')
            }
            
    }
)

export const getDetailBook = createAsyncThunk<void, string,  { rejectValue: string; state: RootState }>(
    'apiBook/getDetailBook',
     async(link, thunkApi) =>{
        try {
            thunkApi.dispatch(clearBooks())
            thunkApi.dispatch(clearDetailBook())
            await fetch(link).then((res)=> {
                if(res.ok) {
                    return res.json()
                }
                else{
                    return Promise.reject()
                }
            }).then((data)=>{
                thunkApi.dispatch(setDetailBook(data))
            }).catch((err) =>{ 
            return Promise.reject()})
         }
            
         catch (error) {
            return thunkApi.rejectWithValue('Error')
        }
       
    }
)

