import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import categoryReducer from './category/category.reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart','category']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop:shopReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);