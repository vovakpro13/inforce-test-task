import React from 'react';
import s from '../product.module.css';

const Count = ({count}) => {
    return (
        <div className={s.countWrapper}>
            {count ? <div>В наявності: {count}</div> : <div className={s.noCount}>Товару немає в наявності</div>}
        </div>
    );
};

export default Count;