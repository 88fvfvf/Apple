// AmountSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface IAmount {
    setId: number
    model: string
}

const savedId = parseInt(localStorage.getItem('productId') || '1', 10);
const savedModel = localStorage.getItem('getModel') || '';

const initialState: IAmount = {
    setId: savedId,
    model: savedModel
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
            localStorage.setItem('getModel', action.payload)
        }
    }
})

export const { setId, setModel } = AmountSlice.actions
export default AmountSlice.reducer
