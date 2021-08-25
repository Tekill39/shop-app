import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import CartItem from '../components/UI/CartItem';


const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    return(
        <View style = {styles.orderItem}>
            <View style = {styles.summary}>                
                <Text style = {styles.amount}>${props.amount}</Text>
                <Text style = {styles.date}>{props.date}</Text>
            </View>
            <Button color = {Colors.primary} title = {showDetails ? 'Hide details' :'Show details'}
            onPress={()=>{setShowDetails(prevState=>!prevState);
            }}
            />
            {showDetails && <View style={styles.detailItems}>
                {props.items.map(cartItem=> (
                <CartItem
                    key={cartItem.productId}
                    quanity={cartItem.quanity}
                    amount={cartItem.sum}
                    title={cartItem.productTitle} />))}
                </View>}          
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
    },
    detailItems:{
        width:'100%'
    }
});

export default OrderItem;
