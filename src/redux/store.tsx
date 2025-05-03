// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";
import cartSlice from "./reducers/order"; // ✅ اضافه شده
import checkoutSlice from "./reducers/checkout";

const combinedReducer = combineReducers({
    products: productSlice,
    cart: cartSlice,         
    checkout: checkoutSlice, 
})

// ساخت Store
export const store = configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // غیرفعال کردن بررسی سریال‌پذیری برای redux-persist
        }),
});

// تعریف نوع‌های TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 


