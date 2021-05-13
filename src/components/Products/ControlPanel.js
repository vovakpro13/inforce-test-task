import React, {useState} from 'react';
import s from "./products.module.css";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import CreateProduct from "../CreateProduct/CreateProduct";
import {connect} from "react-redux";
import {addProduct, deleteProduct, setProducts, setSortByCount, setSortByName} from "../../redux/productsReducer";

// panel for control products
const ControlPanel = (props) => {
    const {
        chosenProductId,
        deleteProduct,
        addProduct,
        chooseProduct,
        setSortByName,
        setSortByCount,
        sortByName,
        sortByCount
    } = props;

    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [craeteWindow, setCreateWindow] = useState(null);

    return (
        <div>

            {
                //open delete modal window
                deleteConfirm &&
                <ConfirmDelete id={chosenProductId} setDeleteConfirm={setDeleteConfirm} deleteProduct={deleteProduct}
                               chooseProduct={chooseProduct}/>}

            {   // open window for creating new produvt
                craeteWindow && <CreateProduct setCreateWindow={setCreateWindow} addProduct={addProduct}/>}

            <div className={s.controlPanel}>
                <div className={s.sortWrapper}>
                    <h4>Sort</h4>
                    <label><input type="checkbox" checked={sortByName}
                                  onChange={(ev) => setSortByName(ev.target.checked)} value="byName" name="sort"/> By
                        name</label>
                    <label><input type="checkbox" checked={sortByCount}
                                  onChange={(ev) => setSortByCount(ev.target.checked)} value="byCount" name="sort"/> By
                        count</label>
                </div>

                <div className={s.btnsBlock}>
                    <button onClick={() => setCreateWindow(true)} className={`${s.btn} ${s.createBtn}`}> NEW</button>
                    <button onClick={() => setDeleteConfirm(true)} className={`${s.btn} ${s.delete}`}
                            disabled={!chosenProductId}>Delete {chosenProductId} product
                    </button>
                </div>

            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        sortByName: state.productsData.sortByName,
        sortByCount: state.productsData.sortByCount,

    }
}

export default connect(mapStateToProps, {
    addProduct,
    deleteProduct,
    setProducts,
    setSortByName,
    setSortByCount
})(ControlPanel);