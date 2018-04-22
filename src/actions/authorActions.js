import actionTypes from './actionTypes';
import authorApi from '../api/mockAuthorApi';


export function loadAuthorsSuccess(authors){
    debugger;
    return { type: actionTypes.LOAD_AUTHOR_SUCCESS, authors: authors };
}

export function loadAuthors(){
    debugger;
    return function (dispatch) {
        const authors = authorApi.getAllAuthors();
        dispatch(loadAuthorsSuccess(authors));
    };

}
