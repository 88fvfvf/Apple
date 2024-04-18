import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart/Cart.slice";
import CategoriesSlice from "./Categories/Categories.slice";
import { apiProduct } from "./api/apiProducts";
import getById from "./getById/getById.slice";

export const store = configureStore({
    reducer: {
        Categories: CategoriesSlice,
        getById: getById,
        CartSlice: CartSlice,
        [apiProduct.reducerPath]: apiProduct.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiProduct.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;