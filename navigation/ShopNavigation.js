import React from 'react';
import {createAppContainer} from 'react-navigation';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import { Ionicons } from '@expo/vector-icons';
import UserProductScreen from '../screens/user/UserProductScreen';
import EditProductscreen from '../screens/user/EditProduct';

const defaultNavOptions= {
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primary : '' 
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : Colors.primary
};

const ProductNavigator = createStackNavigator(
    {
        ProductOverview:ProductOverviewScreen,
        ProductDetail:ProductDetailScreen,
        Cart:CartScreen
    }, 
    {
        navigationOptions:{
            drawerIcon: drawerConfig => (
                <Ionicons 
                    name={Platform.OS ==='android' ? 'md-list' : 'ios-list'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
           },
     defaultNavigationOptions:defaultNavOptions
    }         
);

const OrdersNavigator = createStackNavigator({
    Orders:OrdersScreen    
},    
 {
    defaultNavigationOptions:defaultNavOptions
});

const AdminNavigator = createStackNavigator({
    UserProducts:UserProductScreen,
    EditProduct: EditProductscreen    
}, 
{
    navigationOptions:{
        drawerIcon: drawerConfig => (
            <Ionicons 
                name={Platform.OS ==='android' ? 'md-create' : 'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
       },
       defaultNavigationOptions:defaultNavOptions
    }
);


const ShopNavigator = createDrawerNavigator({
    Products: ProductNavigator,
    Orders: OrdersNavigator,
    Admin:AdminNavigator
}, {
    contentOptions:{
        activeTintColor:Colors.primary,
        itemsContainerStyle: {
        marginVertical: 30,
        }
    }    
});


export default createAppContainer(ShopNavigator);