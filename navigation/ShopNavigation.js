import {createAppContainer} from 'react-navigation';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';

const ProductNavigator = createStackNavigator(
    {
        ProductOverview:ProductOverviewScreen,
        ProductDetail:ProductDetailScreen,
        Cart:CartScreen
    },

    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:Platform.OS === 'android' ? Colors.primary : '' 
            },
            headerTintColor:Platform.OS === 'android' ? 'white' : 'Colors.primary'
    }
});

export default createAppContainer(ProductNavigator);