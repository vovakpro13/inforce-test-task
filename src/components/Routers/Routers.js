import React from 'react';
import {Route} from 'react-router-dom';
import ProductsContainer from "../Products/ProductsContainer";
import ProductDetails from "../Products/ProductDetails/ProductDetailsContainer";
import CreateProduct from "../CreateProduct/CreateProduct";

// app routers
const Routers = () => {
    return (
        <div>
            <Route exact path={'/'} render={() => <ProductsContainer/>}/>
            <Route exact path={'/details/:productId'}
                   render={({match: {params: {productId}}}) => <ProductDetails productId={productId}/>}/>
            <Route exact path={'/create'} render={() => <CreateProduct/>} />
        </div>
    );
};

export default Routers;