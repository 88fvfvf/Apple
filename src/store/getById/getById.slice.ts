// AmountSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface IAmount {
    setId: number
}

// Проверяем наличие сохраненного идентификатора в localStorage
const savedId = parseInt(localStorage.getItem('productId') || '1', 10); // Используем начальное значение, если сохраненного нет
const initialState: IAmount = {
    setId: savedId
}
    
const AmountSlice = createSlice({
    name: 'Amount',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.setId = action.payload;
            // Сохраняем идентификатор в localStorage
            localStorage.setItem('productId', action.payload.toString());
        }
    }
})

export const { setId } = AmountSlice.actions
export default AmountSlice.reducer
