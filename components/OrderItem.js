import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import CartItem from '../components/UI/CartItem';


const OrderItem = props => {
    return(
        <View style = {styles.orderItem}>
            <View style = {styles.summary}>
                
                <Text style = {styles.amount}>${props.amount}</Text>
                <Text style = {styles.date}>{props.date}</Text>
            </View>
            <Button color = {Colors.primary} title = 'Show details'/>          
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{ width:0, height:2 },
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        alignItems:'center',       
        backgroundColor:'white',
        margin:20,
        padding:10
    },
    summary:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%'
    },
    amount:{
        fontSize:16
    },
    date:{
        fontSize:16,
        color:'#888'
    }
});

export default OrderItem;
