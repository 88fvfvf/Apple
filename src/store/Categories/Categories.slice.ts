import { createSlice } from "@reduxjs/toolkit";

interface ICat {
    categories: string
}

const initialState: ICat = {
    categories: ''
}

const CategoriesSlice = createSlice({
    name: 'CategoriesSlice',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export default CategoriesSlice.reducer
export const { setCategories } = CategoriesSlice.actions