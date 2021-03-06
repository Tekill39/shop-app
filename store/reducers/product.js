import Product from '../../constants/models/product';
import PRODUCTS from '../../data/dummy-data';
import { CREATE_PRODUCT, DELETE_PRODUCT, SET_PRODUCTS, UPDATE_PRODUCT } from '../actions/products';

const initialState = {
    availableProducts :PRODUCTS,
    userProducts:PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export default (state=initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                availableProducts:action.products,
                userProducts:action.products.filter(prod => prod.ownerId === 'u1')
            };
        case CREATE_PRODUCT:
            const newProduct = new Product(
               action.productData.id,
            'u1',
            action.productData.title,
            action.productData.imageUrl, 
            action.productData.descriprion, 
            action.productData.price);
            return{
                ...state,
                availableProducts:state.availableProducts.concat(newProduct),
                userProducts:state.userProducts.concat(newProduct)
            };
        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(
                prod=> prod.id === action.pid
            );
            const updatedProduct = new Product(
                action.pid,
                state.userProducts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.descriprion, 
                state.userProducts[productIndex].price
            );
            const updateUserProducts = [...state.userProducts];
            updateUserProducts[productIndex] = updatedProduct;
            const availableProductIndex = state.availableProducts.findIndex(
                prod=>prod.id === action.pid
            );
            const updatedAvailableProducts = [...state.availableProducts];
            updatedAvailableProducts[availableProductIndex] = updatedProduct;
            return {
                ...state,
                availableProducts:updatedAvailableProducts,
                userProducts:updateUserProducts
            };    

        case DELETE_PRODUCT:
           return {
                ...state,
                userProducts:state.userProducts.filter(
                    product => product.id !== action.pid
                ),
                availableProducts:state.availableProducts.filter(
                    product => product.id !== action.pid
                )
            }
        } 
    return state;

};
