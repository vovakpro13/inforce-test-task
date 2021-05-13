import React from 'react';
import s from '../product.module.css';


const Name = ({name}) => {
    return <div className={s.productName}>{name}</div>;
};

export default Name;