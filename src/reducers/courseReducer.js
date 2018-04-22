import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const courseReducer=(state = initialState.courses, action)=> {

    switch (action.type) {
        case actionTypes.LOAD_COURSE_SUCCESS:
            debugger;
            return action.courses;
        case actionTypes.SAVE_COURSE_SUCCESS:
            debugger;
            return [...state, Object.assign({}, action.course)];
        case actionTypes.UPDATE_COURSE_SUCCESS:
            debugger;
            return [...state.filter(course => course.id != action.course.id),
            Object.assign({}, action.course)];
        case actionTypes.DELETE_COURSE_SUCCESS:
            debugger;
            return [...state.filter(course => course.id != action.course.id)];

        default:
            return state;
    }
};

export default courseReducer;