import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/courseActions';
import CourseList from './CourseList';
import { browserHistory } from 'react-router';
import TextInput from "../common/TextInput";

class CoursePage extends Component {
    constructor(props, context) {
        debugger;
        console.log('course page constructor!!!!!!!');
        super(props, context);
        this.state = {
            courses: this.props.courses,
            searchString: ''
        };
        this.redirectToEmptyManagePage = this.redirectToEmptyManagePage.bind(this);
        this.deleteSelectedCourses = this.deleteSelectedCourses.bind(this);
        this.changeActiveStatus = this.changeActiveStatus.bind(this);
        this.updateSearchString = this.updateSearchString.bind(this);
    }
    
    redirectToEmptyManagePage() {
        browserHistory.push('/course');
    }
    deleteSelectedCourses() {
        event.preventDefault();
        let courses = [...this.state.courses];
        let selected = courses.filter(course => course.isDelete == true);        
        let noSelected = courses.filter(course => course.isDelete == false);
        this.setState({ courses: noSelected });

        debugger;
        selected.map(course=>this.props.actions.deleteCourse(course));
        //selectedCourses.map(course => this.props.actions.saveCourse(course));

    }
    changeActiveStatus(event) {

        debugger;
        let name = event.target.name;
        let courses = [...this.state.courses];
        let selected = courses.filter(course => course.id == name)[0];
        selected.isDelete = !selected.isDelete;
        let idx = courses.findIndex(course => course.id == name);
        courses.splice(idx, 1, selected);
        this.setState({ courses: courses });

    }
    updateSearchString(event) {
        this.setState({ searchString: event.target.value });
    }

    render() {
        debugger;
        console.log('course page render!!!!');
        // let renderCourses = this.state.courses.filter(course =>
        //     course.title.toLowerCase().includes(this.state.searchString.toLowerCase())
        // );
        // this.setState({ courses: renderCourses });
        return (
            <div>
                <h1>Courses</h1>
                <button
                    className="btn btn-primary" onClick={this.redirectToEmptyManagePage}
                >Add Course</button>

                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                <button
                    className="btn btn-primary" onClick={this.deleteSelectedCourses}
                >Delete Select</button>

                <br/><br/><br/>

                <TextInput
                    error='' name='search' label='search by title'
                    value={this.state.searchString} onChange={this.updateSearchString}

                />
                <CourseList courses={this.state.courses.filter(course =>
                    course.title.toLowerCase()
                        .includes(this.state.searchString.toLowerCase())
                )}
                    onChange={this.changeActiveStatus} />
            </div>

        );
    }
}

CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, onwProps) {
    debugger;
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);