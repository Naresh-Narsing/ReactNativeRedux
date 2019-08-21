import * as ActionTypes from './ActionTypes';

export const addComment = (author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload : { 
        author : author
    }
})