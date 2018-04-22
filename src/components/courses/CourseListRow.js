import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import CheckBox from "../common/CheckBox";

const CourseListRow = ({ course,onChange }) => {
    return (
            <tr>
                <td><CheckBox course={course} onChange={onChange}/></td>
                {/* <td>test</td> */}
                <td><a href={course.watchHref} target="_blank">Watch</a></td>
                <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
                <td>{course.length}</td>
            </tr>
       

    );
};
export default CourseListRow;