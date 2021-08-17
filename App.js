import React from 'react';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productReducer from './store/reducers/product';
import ShopNavigation from './navigation/ShopNavigation';
import cartReducer from './store/reducers/cart';
// import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  products:productReducer,
  cart:cartReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
   <Provider store = {store}>
     <ShopNavigation/>
   </Provider>
  );
}


