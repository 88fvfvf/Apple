import { createSlice } from "@reduxjs/toolkit";
import { ICartItem } from "../../types/ICart";

interface ICart {
    cart: ICartItem[],
    index: number
    totalPrice: number
}

const initialState: ICart = {
    cart: [],
    index: 0,
    totalPrice: 0
}

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        getCart: (state, action) => {
            const findItem = state.cart.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.cart.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.cart.reduce((sum, obj) => {
                return (obj.price[state.index] * obj.count) + sum;
            }, 0);
        },
        minusCart: (state, action) => {
            const findItem = state.cart.find((obj) => obj.id === action.payload)

            if (findItem && findItem.count > 1) {
                findItem.count--;
            }
            state.totalPrice = state.cart.reduce((sum, obj) => {
                return (obj.price[state.index] * obj.count) + sum;
            }, 0);
        },
        deleteAll: (state) => {
            state.cart = []
            state.totalPrice = 0;
        },
        deleteProduct: (state, action) => {
            const deletedItem = state.cart.find((item) => item.id === action.payload);
            if (deletedItem) {
                state.cart = state.cart.filter((item) => item.id !== action.payload)
                state.totalPrice -= deletedItem.price[state.index] * deletedItem.count;
            }
        },
        getIndex: (state, action) => {
            state.index = action.payload
        }
    }
})
export default CartSlice.reducer
export const { getCart, deleteAll, deleteProduct, minusCart, getIndex } = CartSlice.actions
