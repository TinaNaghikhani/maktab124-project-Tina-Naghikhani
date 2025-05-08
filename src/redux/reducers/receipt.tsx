// src/redux/reducers/receipt.ts
import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";

// ۱. تعریف ساختار استیت
interface ReceiptState {
    finalPrice: number;
}

// ۲. مقدار اولیه
const initialState: ReceiptState = {
    finalPrice: 0,
};

// ۳. ساختن اکشن ریست دستی
export const resetReceipt = createAction("receipt/reset");

// ۴. ایجاد اسلایس
const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        setFinalPrice: (state, action: PayloadAction<number>) => {
            state.finalPrice = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(resetReceipt, () => initialState);
    },
});

// ۵. خروجی‌ها
export const { setFinalPrice } = receiptSlice.actions;
export default receiptSlice.reducer;
