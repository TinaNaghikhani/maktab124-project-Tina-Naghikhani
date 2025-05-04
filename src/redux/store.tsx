// src/redux/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";
import cartSlice from "./reducers/cart";
import checkoutSlice from "./reducers/checkout";
import receiptSlice from "./reducers/receipt";

import storage from 'redux-persist/lib/storage'; // استفاده از localStorage
import { persistReducer, persistStore } from 'redux-persist';

// پیکربندی persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'checkout', 'receipt'], // فقط این قسمت‌ها ذخیره می‌شن
};

// ترکیب ریدوسرها
const combinedReducer = combineReducers({
    products: productSlice,
    cart: cartSlice,
    checkout: checkoutSlice,
    receipt: receiptSlice,
});

// اعمال persist روی ریدوسر ترکیبی
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// ساخت Store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // برای جلوگیری از هشدارهای redux-persist
        }),
});

// persistor برای قرار دادن داخل Provider
export const persistor = persistStore(store);

// تعریف نوع‌های TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
