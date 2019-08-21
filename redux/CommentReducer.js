import { COMMENTS } from '../shared/Comments';
import * as ActionTypes from './ActionTypes';

// export const initialState = {
//     comments: COMMENTS
// }

// export const Reducer = (state = initialState, action) => {
//     return state;
// }

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            return state.concat(comment);
            
        default:
            return state;
    }
}
