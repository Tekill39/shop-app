import React from 'react';
import { Text, StyleSheet, FlatList, Button, View } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import CartItem from '../../components/UI/CartItem';



const CartScreen = props => {
    const cartTotalAmount = useSelector(state=>state.cart.TotalAmount);
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
    });
    return (
    <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>
                Total:<Text style={styles.amount}>${cartTotalAmount}</Text></Text>
            <Button 
                color= {Colors.accent} 
                title="Order Now"
                disabled={cartItems.length === 0}/>
        </View>
        <FlatList data={cartItems}
        keyExtractor={item=> item.productId}
        renderItem={item=> (
        <CartItem 
            quanity={itemData.item.quanity}
            title={itemData.item.productTitletitle.}
            amount={itemData.item.sum}
            onRemove={}/>)}/>
    </View>
    ); 
};
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