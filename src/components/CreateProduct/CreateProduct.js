import React from 'react';
import s from "./create.module.css";

const CreateProduct = ({setCreateWindow, addProduct}) => {
// here must be used library like redux-form or formiik...
    const name = React.createRef();
    const imageUrl = React.createRef();
    const count = React.createRef();
    const width = React.createRef();
    const height = React.createRef();
    const weight = React.createRef();

    // add new product to redux
    const add = () => {
        setCreateWindow(false);
        addProduct(
            {
                id: Date.now(),
                name: name.current.value,
                imageUrl: imageUrl.current.value,
                count: count.current.value,
                size: {width: width.current.value, height: height.current.value},
                weight: weight.current.value,
                comments: []
            }
        );
    }

    return (
        <div>
            <div className={s.centerAll}>
                <div className={s.modalWindowConfirm} onClick={() => setCreateWindow(false)}>
                </div>
                <div className={s.window}>
                    <form className={s.form}>
                        <div>Name: <input ref={name} type={'text'}/></div>
                        <div>Image URL: <input ref={imageUrl} type={'text'}/></div>
                        <div>Count: <input ref={count} type={'number'}/></div>
                        <div>Width: <input ref={width} type={'number'}/></div>
                        <div>Height: <input ref={height} type={'number'}/></div>
                        <div>Weight: <input ref={weight} type={'number'}/></div>
                    </form>
                    <button onClick={() => add()}>Add product</button>
                    <button onClick={() => setCreateWindow(false)}>Exit</button>
                </div>
            </div>
        </div>
    );
};

export default CreateProduct;