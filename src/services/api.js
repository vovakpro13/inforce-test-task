import {products} from "../resource/products";
import {comments} from "../resource/comments";

//fake api

//get all products
export const requestProducts = () =>{
    return new Promise((resolve) => setTimeout(() => resolve(products) , 800));
}

// get one product
export const requestProduct = (productId) =>{
    return new Promise((resolve) => setTimeout(() => resolve(products.filter(p => p.id === +productId)[0]) , 800));
}

//get all comments for product
export const requestProductComments = (productId) =>{
    return new Promise((resolve) => setTimeout(() => resolve(comments.filter(c => c.productId === +productId)) , 500));
}
