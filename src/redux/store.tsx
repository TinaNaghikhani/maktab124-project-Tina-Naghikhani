// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";

const combinedReducer = combineReducers({
    products: productSlice
})
// تنظیمات redux-persist
const persistConfig = {
    key: "root", // کلید برای ذخیره‌سازی در localStorage
    storage, // استفاده از localStorage
    whitelist: ["products"], // فقط بخش products ذخیره شود
};

// اعمال redux-persist روی reducer
const persistedReducer = persistReducer(persistConfig, combinedReducer);

// ساخت Store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // غیرفعال کردن بررسی سریال‌پذیری برای redux-persist
        }),
});

// ایجاد Persistor برای ذخیره‌سازی و بازیابی
export const persistor = persistStore(store);

// تعریف نوع‌های TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;