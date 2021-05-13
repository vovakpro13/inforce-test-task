import React from 'react';
import spinner from '../../../assets/images/Spinner-5.gif';
import s from './preloader.module.css';

// page preloader
const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={spinner} alt={'loading'}/>
        </div>
    );
}

export default Preloader;