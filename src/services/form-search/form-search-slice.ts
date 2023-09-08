import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TFormAction } from '../../types/types'

type TInitialState = {
  fields: {
    searchTerm: { value: string }
    category: { value: string }
    sorting: { value: string }
  }
  request: boolean
  failed: boolean
  success: boolean
}

const initialState: TInitialState = {
  fields: {
    searchTerm: { value: '' },
    category: { value: '' },
    sorting: { value: 'relevance' },
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
      if (state.fields[field]) {
        state.fields[field].value = action.payload.value
      }
      return state
    },
    clearSearchForm: (state) => {
      state.fields.category.value = ''
      state.fields.searchTerm.value = ''
      state.fields.sorting.value = 'relevance'
    },
  },
})

export const { setSearchForm, clearSearchForm } = formSearchSlice.actions

export default formSearchSlice.reducer
