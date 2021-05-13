

const SET_COMMENTS = 'SET_PRODUCTS';
const DELETE_COMMENT = 'DELETE_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';


const initComments= {
    comments: null
}
// comments reducer
const commentsReducer = (state = initComments, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state, comments: [...state.comments, action.comment]}
        case SET_COMMENTS:
            return {...state, comments: action.comments}
        case DELETE_COMMENT:
            return {...state, comments: state.comments.filter(c => c.id !== action.commentId)}
        default:
            return state;
    }
}

// action creators for dispatch comments reducer
export const setComments = comments => ({type: SET_COMMENTS, comments});
export const deleteComment = commentId => ({type: DELETE_COMMENT, commentId});
export const addComment = comment => ({type: ADD_COMMENT, comment});



export default commentsReducer;