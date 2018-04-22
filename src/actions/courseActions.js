import actionTypes from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    debugger;
    return { type: actionTypes.LOAD_COURSE_SUCCESS, courses: courses };
}


export function loadCourses(){
    debugger;
    return function (dispatch) { 
        debugger;    
        try {
            const courses = courseApi.getAllCourses();         
            dispatch(loadCoursesSuccess(courses));
        } catch (e) {
            throw (e);
        }
    };
}

export function saveCourseSuccess(course){
    console.log("action save course");
    debugger;
    return { type: actionTypes.SAVE_COURSE_SUCCESS, course: course };
}

export function updateCourseSuccess(course){
    debugger;
    return { type: actionTypes.UPDATE_COURSE_SUCCESS, course: course };
}

export function saveCourse(course){
    return function (dispatch) {
        const savedCourse = courseApi.saveCourse(course);
        if (course.id)
            dispatch(updateCourseSuccess(savedCourse));
        else
            dispatch(saveCourseSuccess(savedCourse));
    };

}

export function deleteCourseSuccess(course){
    debugger;
    return { type: actionTypes.DELETE_COURSE_SUCCESS, course: course };
}

export function deleteCourse(course){
    debugger;
    return function (dispatch) {
        courseApi.deleteCourse(course);
        dispatch(deleteCourseSuccess(course));
    };
}




