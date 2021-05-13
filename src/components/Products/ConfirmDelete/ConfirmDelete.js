import React from 'react';
import s from './confirmDelete.module.css';

const ConfirmDelete = ({id, setDeleteConfirm, deleteProduct, chooseProduct}) => {

    // confirm deleting some product
    const confirm = () =>{
        deleteProduct(id);
        setDeleteConfirm(false);
        chooseProduct(null)
    }

    // exit from modal window
    const no = () =>{
        setDeleteConfirm(false);
    }

    return (
        <div className={s.centerAll}>
            <div className={s.modalWindowConfirm} onClick={() => no()}>
            </div>
            <div className={s.window}>
                <h4>Ви дійсно хочете видалити продукт №{id} ?</h4>
                <div className={s.controlButtons}>
                    <button className={s.yes} onClick={() => confirm()}>Так</button>
                    <button className={s.no} onClick={ () => no()}>Ні</button>
                </div>
            </div>
        </div>

    );
};

export default ConfirmDelete;