import React from 'react';
import {Link} from "react-router-dom";
import s from '../product.module.css';

const LinkDetails = (props) => {
    return (
        <div className={s.linkDetails}>
            <Link to={{pathname: `/details/${props.id}`} }>Детальніше</Link>
        </div>
    );
};

export default LinkDetails;