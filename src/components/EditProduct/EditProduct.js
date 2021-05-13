import React from 'react';
import s from "../CreateProduct/create.module.css";

// modal window for edit current product

const EditProduct = ({
                         setEditWindow,
                         setProduct,
                         product: {id, name, imageUrl, count, size: {width, height}, weight, comments}
                     }) => {

    // here must be used library like redux-form or formiik...
    const nameRef = React.createRef();
    const imageUrlRef = React.createRef();
    const countRef = React.createRef();
    const widthRef = React.createRef();
    const heightRef = React.createRef();
    const weightRef = React.createRef();

    const edit = () => {
        setProduct({
            id,
            imageUrl: imageUrlRef.current.value || imageUrl,
            name: nameRef.current.value || name,
            count: countRef.current.value || count,
            size: {
                width: widthRef.current.value || width,
                height: heightRef.current.value || height
            },
            weight: weightRef.current.value || weight,
            comments

        });
        setEditWindow(false);
    }
    return (
        <div>
            <div className={s.centerAll}>
                <div className={s.modalWindowConfirm} onClick={() => setEditWindow(false)}>
                </div>
                <div className={s.window}>
                    <form className={s.form}>
                        <div>Name: <input ref={nameRef} type={'text'} placeholder={name}/></div>
                        <div>Image URL: <input ref={imageUrlRef} type={'text'} placeholder={imageUrl}/></div>
                        <div>Count: <input ref={countRef} type={'number'} placeholder={count}/></div>
                        <div>Width: <input ref={widthRef} type={'number'} placeholder={width}/></div>
                        <div>Height: <input ref={heightRef} type={'number'} placeholder={height}/></div>
                        <div>Weight: <input ref={weightRef} type={'text'} placeholder={weight}/></div>
                    </form>
                    <button onClick={() => edit()}>Edit product</button>
                    <button onClick={() => setEditWindow(false)}>Exit</button>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;