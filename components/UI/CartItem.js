import React from 'react';
import {View, Text, StyleSheet,  TouchableOpacity, Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CartItem = props => {
    return ( 
    <View style={styles.cartItem}>
        <View style={styles.itemData}>
            <Text style={styles.quanity}>{props.quanity}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.itemData}>
            <Text style={styles.amount}>${props.amount.toFixed(2)}</Text>
            {props.deletable && <TouchableOpacity onPress = {props.onRemove} style = {styles.deleteButton}>
                <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                size={23}
                color="red"/>
            </TouchableOpacity>}
        </View>
    </View>
    )
};

const styles = StyleSheet.create({
    cartItem:{
        padding:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemData:{},
    quanity:{},
    title:{},
    amount:{},
    deleteButton: {
        margin:20
}
})

export default CartItem;