import React from 'react';
import s from './product.module.css';
import Image from "./Image/Image";
import Description from "./Description/Description";
import LinkDetails from "./Link/LinkDetails";

const Product = (props) => {
    const {id, imageUrl, name, count, size, weight, chooseProduct, chosenProductId} = props;

    // function for choosing one product
    const choose = () => {
        chooseProduct(chosenProductId === id ? null : id);
    }

    return (
        <div className={`${s.productWrapper} ${chosenProductId === id && s.choosenProduct}`} onClick={() => choose()}>
            <Image imageUrl={imageUrl} name={name}/>
            <Description name={name} size={size} weight={weight} count={count}/>
            <LinkDetails {...props}/>
        </div>
    );
};

export default Product;