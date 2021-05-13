import {requestProducts} from "../services/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_SORT_BY_NAME = 'SET_SORT_BY_NAME';
const SET_SORT_BY_COUNT = 'SET_SORT_BY_COUNT';
const CHOOSE_PRODUCT = 'CHOOSE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

const initProducts = {
    products: null,
    chosenProductId: null,
    sortByName: false,
    sortByCount: false
}

// products reducer
const productsReducer = (state = initProducts, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case CHOOSE_PRODUCT:
            return {...state, chosenProductId: action.productId}
        case DELETE_PRODUCT:
            return {...state, products: state.products.filter(p => p.id !== action.productId)}
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.product]}
        case SET_SORT_BY_NAME:
            return {...state, sortByName: action.value}
        case SET_SORT_BY_COUNT:
            return {...state, sortByCount: action.value}
        default:
            return state;
    }
}

// action creators
export const setProducts = products => ({type: SET_PRODUCTS, products});
export const setSortByName = value => ({type: SET_SORT_BY_NAME, value});
export const setSortByCount = value => ({type: SET_SORT_BY_COUNT, value});
export const chooseProduct = productId => ({type: CHOOSE_PRODUCT, productId});
export const deleteProduct = productId => ({type: DELETE_PRODUCT, productId});
export const addProduct = product => ({type: ADD_PRODUCT, product});

export const getProducts = () =>
    (dispatch) =>{
        requestProducts().then(products => dispatch(setProducts(products)));
    }

export default productsReducer;