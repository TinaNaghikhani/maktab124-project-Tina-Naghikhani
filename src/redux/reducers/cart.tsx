import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookItem {
    id: string;
    name: string;
    price: number;
    offer: number;
    image: string;
    quantity?: number;
}

interface CartState {
    products: any;
    books: BookItem[];
    quantities: { [key: string]: number };
    totalPrice: number;
}

const initialState: CartState = {
    books: [],
    quantities: {},
    totalPrice: 0,
    products: undefined
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<BookItem>) => {
            const product = action.payload;
            const exists = state.books.find(p => p.id === product.id);
            if (!exists) {
                state.books.push(product);
                state.quantities[product.id] = 1;
                state.totalPrice = calcTotal(state.books, state.quantities);
            }
        },

        setCartItems: (state, action: PayloadAction<BookItem[]>) => {
            state.books = action.payload;
            const initialQuantities = {};
            action.payload.forEach(product => {
                initialQuantities[product.id] = 1;
            });
            state.quantities = initialQuantities;
            state.totalPrice = calcTotal(state.books, initialQuantities);
        },
        increaseQty: (state, action: PayloadAction<string | number>) => {
            const id = action.payload;
            state.quantities[id] += 1;
            state.totalPrice = calcTotal(state.books, state.quantities);
        },
        decreaseQty: (state, action: PayloadAction<string | number>) => {
            const id = action.payload;
            if (state.quantities[id] > 1) {
                state.quantities[id] -= 1;
                state.totalPrice = calcTotal(state.books, state.quantities);
            }
        },
        removeFromCart: (state, action: PayloadAction<string | number>) => {
            const id = action.payload;
            state.books = state.books.filter(p => p.id !== id);
            delete state.quantities[id];
            state.totalPrice = calcTotal(state.books, state.quantities);
        },
        removeAllFromCart: (state) => {
            state.books = []
            state.quantities = {}
        },
    },
});

function calcTotal(books: BookItem[], quantities: { [key: string]: number }) {
    return books.reduce((acc, book) => {
        const qty = quantities[book.id] || 1;
        const discounted = Math.round(book.price * (1 - book.offer / 100));
        return acc + discounted * qty;
    }, 0);
}

export const { setCartItems, increaseQty, decreaseQty, removeFromCart, addToCart, removeAllFromCart } = cartSlice.actions;
export default cartSlice.reducer;

