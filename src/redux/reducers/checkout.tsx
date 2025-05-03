import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutForm {
    name: string;
    address: string;
    phone: string;
}

const initialState: CheckoutForm = {
    name: "",
    address: "",
    phone: "",
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
