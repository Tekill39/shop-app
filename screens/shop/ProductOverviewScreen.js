import React from 'react';
import {FlatList, Platform, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import ProductItem from './ProductItem';
import * as cartActions from '../../store/actions/cart';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';



const ProductOverviewScreen = props=> {
    const products = useSelector(state => state.products.availableProducts);
   
      const dispatch = useDispatch();
      const selectitemHandler =(id, title)=>{
        props.navigation.navigate('ProductDetail', {
          productId:id,
          productTitle:title});
      };
      return (        
        <FlatList data={products} 
          keyExtractor = {item =>item.id}
          renderItem={itemData => (
          <ProductItem 
            image={itemData.item.imageUrl}
            title={itemData.item.title}
            price={itemData.item.price}
            onSelect={()=>{
              selectitemHandler(itemData.item.id, itemData.item.title);}
            }               
          >
            <Button 
             color={Colors.primary}
             title="View Details" 
             onPress={selectitemHandler(itemData.item.id, itemData.item.title)}/>
            <Button 
             color={Colors.primary}
             title = "To Cart" 
             onPress={()=> {
               dispatch(cartActions.addToCart(itemData.item))
             }}/>
          </ProductItem>
        )}
        />)
};
ProductOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft:(
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
              navData.navigation.toggleDrawer();
          }}>
          </Item>        
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
              navData.navigation.navigate('Cart')
          }}>
          </Item>        
      </HeaderButtons>
    )
  };
};

export default ProductOverviewScreen; 