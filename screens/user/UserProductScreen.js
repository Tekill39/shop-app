import React from  'react';
import {FlatList, Platform, Button, Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../shop/ProductItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/products'

const UserProductScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const deleteHandler = (id)=> {
      Alert.alert('Are you shure?', 'delete this item?',[
          {text:'No', style:'default'},
          {text:'Yes', style:'destructive', 
            onPress:() => {
              dispatch(productActions.deleteProduct(id))
            }
          }
      ])
  }

    const editProductHandler = (id)=>{
      props.navigation.navigate('EditProduct', {productId:id});
    }

    return (
        <FlatList
          data={userProducts}
          keyExtractor={item => item.id}
          renderItem={itemData => (
            <ProductItem
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              price={itemData.item.price}
              onSelect={() => {}}
            >
              <Button color={Colors.primary} title="Edit" onPress={() => {
                editProductHandler(itemData.item.id)
              }} />
              <Button
                color={Colors.primary}
                title="Delete"
                onPress={deleteHandler.bind(this, itemData.item.id)}
              />
            </ProductItem>
          )}
        />
      );
};

UserProductScreen.navigationOptions =navData=> {
    return{
    headerTitle:'Your Products',
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
    headerRight:(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add"
            iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            onPress={() => {
                navData.navigation.navigate('EditProduct');
            }}>
            </Item>        
        </HeaderButtons>
      )  
    }
};

export default UserProductScreen;