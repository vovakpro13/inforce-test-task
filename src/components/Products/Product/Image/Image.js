import React from 'react';
import s from '../product.module.css';

const Image = ({imageUrl, name}) => {
    return <div className={s.imageWrapper}><img src={imageUrl} alt={name}/></div>;
};

export default Image;