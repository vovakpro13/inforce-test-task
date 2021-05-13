import React, {useEffect, useState} from 'react';
import Image from "../Product/Image/Image";
import {requestProduct, requestProductComments} from "../../../services/api";
import Preloader from "../../common/Preloader/Preloader";
import s from '../products.module.css';
import Parameters from "../Product/Description/Parameters";
import {connect} from "react-redux";
import {addComment, deleteComment, setComments} from "../../../redux/commentsReducer";
import Count from "../Product/Description/Count";
import EditProduct from "../../EditProduct/EditProduct";

// one product jsx
const Product = (props) => {
    const {imageUrl, name, size, weight, count, setEditWindow} = props;
    return (<div>
            <div className={`${s.productDetails} ${s.row}`}>
                <Image imageUrl={imageUrl} name={name}/>
                <div>
                    <Parameters size={size} weight={weight}/>
                    <Count count={count}/><br/>
                    <button onClick={() => setEditWindow(true)}>Edit product</button>
                </div>
            </div>
        </div>
    )
}

// one comment jsx
const Comment = ({id, date, description, deleteComment}) => {
    return (
        <div className={s.comment}>
            <div>
                <div>{description}</div>
                <div><em>{date}</em></div>
            </div>
            <div>
                <img onClick={() => deleteComment(id)} alt={'delete'}
                     src={'https://www.flaticon.com/svg/vstatic/svg/1828/1828843.svg?token=exp=1620940295~hmac=bd1c576db6edbedc24b5c185caab25fc'}/>
            </div>
        </div>
    );
}

const ProductDetailsContainer = ({productId, setComments, comments, deleteComment, addComment,editProduct, getProducts}) => {
    const [product, setProduct] = useState(null);
    const [editWindow, setEditWindow] = useState(false);

    // get current product and it`s comments
    useEffect(() => requestProduct(productId).then(p => setProduct(p)), []);
    useEffect(() => requestProductComments(productId).then(c => setComments(c)), []);

    const commentText = React.createRef();

    // function add new comment to redux
    const add = () => {
        const date = new Date();
        addComment({
            id: Date.now(),
            productId: product.id,
            description: commentText.current.value,
            date: `${date.getHours()}:${date.getMinutes()} ${date.getDay()}.${date.getMonth()}.${date.getFullYear()}` //'14:00 22.08.2021'
        })
    }

    return (
        <div className={s.detailsWrapper}>
            {   // open edit window
                editWindow ? <EditProduct product={product} setEditWindow={setEditWindow} setProduct={setProduct}/> : false
            }
            {   // show current product
                product ? <Product setEditWindow={setEditWindow} {...product}/>
                    : <Preloader/>
            }

            <h4>Comments</h4>
            {   //comments for current product
                comments ? comments.map(c => <Comment key={c.id} {...c} deleteComment={deleteComment}/>)
                    : <Preloader/>
            }

            {/* add comment to this product */}
            <div className={s.addComment}>
                <h5>Add comment</h5>
                <textarea ref={commentText} name="text" id="comment" cols="30" rows="3">
                </textarea>
                <div>
                    <button onClick={() => add()}> Send</button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comments: state.commentsData.comments
    }
}

export default connect(mapStateToProps, {setComments, deleteComment, addComment})(ProductDetailsContainer);