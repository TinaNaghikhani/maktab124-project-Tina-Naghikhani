import { products } from "@/interfaces/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface productState {
    map: ReactNode;
    products: products[];
}
const initialState: productState = {
    products: [],

}
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<products[]>) => {
            state.products = action.payload;
        },
        deleteProducts: (state, action: PayloadAction<products[]>) => {
            state.products = state.products.filter((products) => { products.id !== action.payload })
        },
        addProducts: (state, action) => {
            return action.payload;
        },
        updateProducts: (state, action) => {
            //@ts-ignore
            return state.map(item => {
                if (item.id === action.payload.id){
                     return action.payload.data
                    }
                return item 
                })
            }
        }
    }
)
export const { setProducts, deleteProducts,updateProducts,addProducts } = productSlice.actions;
export default productSlice.reducer