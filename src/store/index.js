import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './user/products'
import cart from './user/cart';
import category from './user/category';
import message from './admin/message';
import order from './admin/order';
const store = configureStore({
    reducer: {  authData:auth,productData:product,cartData:cart,categoryData:category,messageData:message,orderData:order},
  });
  
  export default store;