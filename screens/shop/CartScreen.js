import React from 'react';
import { Text, StyleSheet, FlatList, Button, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/UI/CartItem';
import * as cartActions from '../../store/actions/cart';
import * as oredersActions from '../../store/actions/order';



const CartScreen = props => {
    const cartTotalAmount = useSelector(state=>state.cart.totalAmount);
    const cartItems = useSelector(state=> {
        const  transformedCartItems = [];
        for(const key in state.cart.items){
            transformedCartItems.push({
                productId:key,
                productTitle:state.cart.items[key].productTitle,
                productPrice:state.cart.items[key].productPrice,
                quanity:state.cart.items[key].quanity,
                sum:state.cart.items[key].sum
            });
        }
        return transformedCartItems.sort((a,b)=>
        a.productId > b.productId ? 1 : -1);
    });
    dispatch= useDispatch();
    return (
    <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>
                Total:<Text style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2)*100) /100 }</Text></Text>
            <Button 
                color= {Colors.accent} 
                title="Order Now"
                disabled={cartItems.length === 0}
                onPress={()=>{
                    dispatch(oredersActions.addOrder(cartItems, cartTotalAmount))

                } }/>
        </View>
        <FlatList 
            data={cartItems}
            keyExtractor={item=> item.productId}
            renderItem={itemData => (
                <CartItem 
                    quanity={itemData.item.quanity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    deletable
                    onRemove={()=>{
                        dispatch(cartActions.removeFromCart(itemData.item.productId));
                    }}
                    />
                )}
            />
        </View>
    ); 
};

CartScreen.navigationOptions = {
    headerTitle:'Your Cart'
}

const styles= StyleSheet.create({
    screen:{
        margin:20        
    },
    summary:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText:{
        fontSize:18
    },
    amount:{
        color:Colors.accent
    }
});

export default CartScreen;