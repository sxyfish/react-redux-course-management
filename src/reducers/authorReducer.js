import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const authorReducer=(state=initialState.authors,action)=>{
   
    switch (action.type) {
        case actionTypes.LOAD_AUTHOR_SUCCESS:
            debugger;
            return action.authors;
            
    
        default:
            return state;
    }
};
export default authorReducer;