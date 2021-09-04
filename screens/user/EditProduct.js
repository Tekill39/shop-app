import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';
import { useSelector } from 'react-redux';

const EditProductscreen = props =>{
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(state=>
        state.products.userProducts.find(prod=>prod.id === prodId));

    const [title, setTitle]= useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setUrlImage]= useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice]= useState('');
    const [description, setDescription]= useState(editedProduct ? editedProduct.description : '');
    
    const submitHandler = useCallback(() => {
        console.log('Submitting');
    },[]);

    useEffect(()=>{
        props.navigation.setParams({submit:submitHandler});
    }, [submitHandler]);
   

    return( 
        <ScrollView>
        <View styles={styles.wrapper}>
            <View style={styles.formInput}>
                    <Text style={styles.label}>Title</Text>
                    <TextInput style={styles.input} value={title} onChangeText={text=> setTitle(text)}/>
            </View>
            <View style={styles.formInput}>
                    <Text style={styles.label}>Image</Text>
                    <TextInput style={styles.input} 
                    value={imageUrl} onChangeText={text=> setUrlImage(text)}/>
            </View>
            {editedProduct ? null : (
            <View style={styles.formInput}>
                    <Text style={styles.label}>PRICE</Text>
                    <TextInput style={styles.input} value={price} onChangeText={text=> setPrice(text)}/>
            </View>)}
            <View style={styles.formInput}>
                    <Text style={styles.label}>DESCRIPTION</Text>
                    <TextInput style={styles.input} value={description} onChangeText={text=> setDescription(text)}/>
            </View>
            </View>
        </ScrollView>
    )};


const styles = StyleSheet.create({
    wrapper:{
        margin:20
    },
    formInput:{
        width:'100%'
    },
    label:{
        marginVertical:8
    },
    input:{
        paddingHorizontal:2,
        paddingVertical:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    }
})
EditProductscreen.navigationOptions= navData=> {
        const submitFn = navData.navigation.getParam('submit')
    return{
        headerTitle:navData.navigation.getParam('productId')
        ? 'Edit Product'
        : 'Add Product',
        headerRight:(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                onPress={submitFn}>
                </Item>        
            </HeaderButtons>
          )  
    }
}

export default EditProductscreen;