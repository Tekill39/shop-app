import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/product';
import ordersReducer from './store/reducers/orders'
import ShopNavigation from './navigation/ShopNavigation';
import cartReducer from './store/reducers/cart';
// import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  products:productReducer,
  cart:cartReducer,
  orders:ordersReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
   <Provider store = {store}>
     <ShopNavigation/>
   </Provider>
  );
}


