import { createSlice } from "@reduxjs/toolkit";

interface ICat {
    categories: string
}
const savedCategories = localStorage.getItem('savedCategories') || '';
const initialState: ICat = {
    categories: savedCategories
}

const CategoriesSlice = createSlice({
    name: 'CategoriesSlice',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload
            localStorage.setItem('savedCategories', action.payload)
        }
    }
})

export default CategoriesSlice.reducer
export const { setCategories } = CategoriesSlice.actions