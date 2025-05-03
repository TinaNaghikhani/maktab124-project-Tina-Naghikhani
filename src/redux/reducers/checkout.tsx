// src/redux/reducers/checkout.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CheckoutForm {
    name: string;
    lName: string;
    code: string;
    address: string;
    phone: string;
}

const initialState: CheckoutForm = {
    name: "",
    address: "",
    phone: "",
    lName: "",
    code: ""
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        updateCheckoutInfo: (state, action: PayloadAction<Partial<CheckoutForm>>) => {
            return { ...state, ...action.payload };
        },
        clearCheckoutInfo: () => initialState,
    },
});

export const { updateCheckoutInfo, clearCheckoutInfo } = checkoutSlice.actions;
export default checkoutSlice.reducer;
