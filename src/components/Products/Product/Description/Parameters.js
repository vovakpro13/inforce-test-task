import React from 'react';
import s from '../product.module.css';

const Parameters = ({size: {width, height}, weight}) => {
    return (
        <div className={s.parametersWrapper}>
            <div>Розмір: {width} x {height}</div>
            <div>Вага: {weight}</div>
        </div>
    );
};

export default Parameters;