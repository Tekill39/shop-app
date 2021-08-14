import React from 'react';
import {FlatList, Text} from 'react-native';
import { Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import * as cartActions from '../../store/actions/cart';



const ProductOverviewScreen = props=> {
    const products = useSelector(state => state.products.availableProducts);
      const dispatch = useDispatch;
      return (
        <FlatList data={products} 
          keyExtractor = {item =>item.id}
          renderItem={itemData => (
          <ProductItem 
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onViewDetail={()=>{
                props.navigation.navigate('ProductDetail', {
                    productId:itemData.item.id,
                    productTitle:itemData.item.title
                });
            }}
            onAddToCart={()=>{
              dispatch(cartActions.onAddToCart(itemData.item));
            }}            
          />
        )}
        />)
};

export default ProductOverviewScreen; 