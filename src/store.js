import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./reducers/favReducer";
import cartReducer from "./reducers/cartReducer";
const store = configureStore({
    reducer: {
        favItems: favReducer,
        cartItems: cartReducer
    }
})

export default store;