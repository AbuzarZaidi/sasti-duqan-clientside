import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import product from './user/products'
import cart from './user/cart';
import category from './user/category';
const store = configureStore({
    reducer: {  authData:auth,productData:product,cartData:cart,categoryData:category},
  });
  
  export default store;