import { products } from "@/interfaces/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:products[] = [];

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<products[]>) => {
            return action.payload;
        },
        deleteProducts: (state, action: PayloadAction<number>) => {
            return state.filter((product) => product.id !== action.payload)
        },
        addProducts: (state, action) => {
            state.push(action.payload);
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
export const { setProducts } = productSlice.actions;
export default productSlice.reducer