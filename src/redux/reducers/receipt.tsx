// src/redux/reducers/receipt.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReceiptState {
    finalPrice: number;
}

const initialState: ReceiptState = {
    finalPrice: 0,
};

const receiptSlice = createSlice({
    name: "receipt",
    initialState,
    reducers: {
        setFinalPrice: (state, action: PayloadAction<number>) => {
            state.finalPrice = action.payload;
        },
    },
});

export const { setFinalPrice } = receiptSlice.actions;
export default receiptSlice.reducer;
