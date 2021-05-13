import React, {useEffect} from 'react';
import Product from "./Product/Product";
import s from './products.module.css';
import Preloader from "../common/Preloader/Preloader";
import ControlPanel from "./ControlPanel";
import {requestProducts} from "../../services/api";
import {addProduct, chooseProduct, deleteProduct, setProducts} from "../../redux/productsReducer";
import {connect} from "react-redux";


const ProductsContainer = ({setProducts, products, chooseProduct, chosenProductId, sortByName, sortByCount}) => {

    // get all products
    useEffect(() => requestProducts().then(products => setProducts(products)), []);

    // sort settings
    const presenentProducts = products;
    products &&
    sortByName && presenentProducts.sort((a, b) => (a.name < b.name) ? 1 : -1);
    sortByCount && presenentProducts.sort((a, b) => (a.count < b.count) ? 1 : -1);


    return (
        <div className={s.contentWrapper}>
            {
                // render all products
                presenentProducts
                    ? <>
                        <ControlPanel
                            products={products}
                            chosenProductId={chosenProductId}
                            chooseProduct={chooseProduct}/>

                        <div className={s.productsWrapper}>
                            {
                                presenentProducts.map(product => <Product
                                key={product.id}  {...product}
                                chooseProduct={chooseProduct}
                                chosenProductId={chosenProductId}/>)
                            }
                        </div>
                    </>
                    : <Preloader/>
            }

        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.productsData.products,
        chosenProductId: state.productsData.chosenProductId,
        sortByName: state.productsData.sortByName,
        sortByCount: state.productsData.sortByCount,

    }
}

export default connect(mapStateToProps,
    {
        setProducts,
        chooseProduct,
        deleteProduct,
        addProduct
    }
)(ProductsContainer);