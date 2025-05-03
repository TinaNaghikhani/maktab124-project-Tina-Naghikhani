// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";
import cartSlice from "./reducers/cart";
import checkoutSlice from "./reducers/checkout";
import receiptSlice from "./reducers/receipt";

const combinedReducer = combineReducers({
    products: productSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    receipt: receiptSlice,
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


