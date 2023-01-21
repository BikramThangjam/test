import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
    totalQuantity: 0,
    totalPrice: 0,
}

 const cartSlice = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        add: (state,action)=>{
            const itemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >=0){
                state.carts[itemIndex].quantity += 1;
            }
            else{
                const tempProduct = {...action.payload, quantity:1};
                state.carts.push(tempProduct); 
            }
        },
        remove: (state,action)=>{
            const itemId = action.payload;
            state.carts = state.carts.filter((item)=> item.id !== itemId);
        },

        decreaseCart: (state,action)=>{
            //If item's quantity is >1, then decrement the quantity
            //If Item's quantity is =1, then remove that item from list.
            const itemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(state.carts[itemIndex].quantity > 1){
                state.carts[itemIndex].quantity -= 1;
            }else if(state.carts[itemIndex].quantity === 1){
                state.carts = state.carts.filter((item)=>item.id !== action.payload.id);
            }
        },

        getTotal: (state)=>{

            const {price, quantity} = state.carts.reduce((cartTotal,currentItem)=>{
               const {price,quantity} = currentItem;
               const itemTotal = price * quantity;

               cartTotal.price += itemTotal;
               cartTotal.quantity += quantity;

               return cartTotal;
            },
            {
                price: 0,
                quantity: 0
            });

            state.totalQuantity = quantity;
            state.totalPrice = parseFloat(price.toFixed(2));
        }
    }
 });

 export const {add,remove,decreaseCart,clearCart,getTotal} = cartSlice.actions;
 export const cartSelector = (state)=> state.cartItems;
 export default cartSlice.reducer;