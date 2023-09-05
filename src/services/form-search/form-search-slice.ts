import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";


type TInitialState = {

        fields: {
            name: {value: string}
            category: {value: string}
            sorting: {value: string}
        }
        request: boolean
        failed: boolean
        success: boolean

}

type TFormAction = {
    field: string
    value: string
}


const initialState: TInitialState = {
 
        fields: {
            name: {value: 'ХУй'},
            category: {value: 'all' },    
            sorting: {value: 'relevance'}
        },
        request: false,
        failed: false,
        success: false,

}



const formSearchSlice = createSlice({
    name: 'formSearch',
    initialState,
    reducers: {
        setSearchForm: (state, action: PayloadAction<TFormAction>) => {
            type ObjectKey = keyof typeof state.fields
            const field = action.payload.field as ObjectKey
            if(state.fields[field]) {
                state.fields[field].value = action.payload.value
            }
            return state
        }
    }
})


export const {
    setSearchForm
} = formSearchSlice.actions

export default formSearchSlice.reducer