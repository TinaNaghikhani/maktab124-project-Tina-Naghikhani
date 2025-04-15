import { products } from "@/interfaces/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
    product: products[];
}
const initialState: productState = {
    products: [],

}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<products[]>) => {
            state.products = action.payload;
        },
        deleteProducts: (state, action: PayloadAction<products[]>) => {
            state.products = state.products.filter((products) => { products.id !== action.payload })
        }
    }
})
export const {setProduct,deleteProducts}=productSlice.actions;
export default productSlice.reducer