import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reudcers/cartReducer";
import { authReducer } from "./reudcers/userReducer";
import { orderReducer, ordersReducer } from "./reudcers/orderReducer";
import { adminReducer } from "./reudcers/adminReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;
export const server="https://nitburgerwalaserver-2kct.onrender.com/api/v1";