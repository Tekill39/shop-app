import {createAppContainer} from 'react-navigation';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

const defaultNavOptions= {
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primary : '' 
    },
    headerTintColor:Platform.OS === 'android' ? 'white' : 'Colors.primary'
};

const ProductNavigator = createStackNavigator(
    {
        ProductOverview:ProductOverviewScreen,
        ProductDetail:ProductDetailScreen,
        Cart:CartScreen
    },

    {
        defaultNavigationOptions: defaultNavOptions         
    });

const OrdersNavigator = createStackNavigator({
    Orders:OrdersScreen    
}, {
    defaultNavigationOptions:defaultNavOptions
});
const ShopNavigator = createDrawerNavigator({
    Products: ProductNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions:{
        activeTintColor:Colors.primary
    }
})
export default createAppContainer(ShopNavigator);