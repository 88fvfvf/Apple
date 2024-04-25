// AmountSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface IAmount {
    setId: number
    model: string
}

const savedId = parseInt(localStorage.getItem('productId') || '1', 10); // Используем начальное значение, если сохраненного нет
const initialState: IAmount = {
    setId: savedId,
    model: ''
}

const AmountSlice = createSlice({
    name: 'Amount',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.setId = action.payload;
            localStorage.setItem('productId', action.payload.toString());
        },
        setModel: (state, action) => {
            state.model = action.payload
        }
    }
})

export const { setId, setModel } = AmountSlice.actions
export default AmountSlice.reducer
