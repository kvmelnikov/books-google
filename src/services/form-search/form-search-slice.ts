import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { MAX_RES } from "../../constants/api";
import { TFormAction } from "../../types/types";

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



const initialState: TInitialState = {
        fields: {
            name: {value: ''},
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
        },

    }
})


export const {
    setSearchForm
} = formSearchSlice.actions

export default formSearchSlice.reducer