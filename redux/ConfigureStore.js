import { createStore, combineReducers } from 'redux';
import { Comments } from './CommentReducer';

// export const ConfigureStore = () => {
//     const store = createStore(
//         Reducer,
//         initialState
//     );
//     return store;
// }

export const ConfigureStore =() => {
    const store =createStore(
        combineReducers({
            comments: Comments,
        })
    );
    return store;
}