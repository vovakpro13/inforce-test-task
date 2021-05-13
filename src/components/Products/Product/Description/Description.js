import React from 'react';
import Name from "./Name";
import {Padding} from "@material-ui/core";
import Parameters from "./Parameters";
import Count from "./Count";
import s from '../product.module.css';

const Description = ({name, size, weight, count}) => {
    return (
        <div className={s.descriptionWrapper}>
            <Name name={name} />
            <Parameters size={size} weight={weight}/>
            <Count count={count}/>
        </div>
    );
};

export default Description;