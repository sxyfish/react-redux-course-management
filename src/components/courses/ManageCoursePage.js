import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';


class ManageCoursePage extends Component {
    constructor(props, context) {
        debugger;
        super(props, context);
        this.state = {
            course: Object.assign({}, this.props.course),
            authors: this.props.authors,
            errors: {}
        };
        debugger;
        this.onEditForm = this.onEditForm.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onReturn=this.onReturn.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        debugger;
        if (this.props.course.id != nextProps.course.id) {
            this.setState({course:Object.assign({}, nextProps.course)});
        }
    }
    onEditForm(event) {
        debugger;
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        // console.log('field='+field);
        // console.log('value='+event.target.value);
        course[field] = event.target.value;
        //return this.setState({course:course});
        return this.setState({ course: course });
     
    }
    onClickSave(event) {
        event.preventDefault();
        debugger;
        this.props.actions.saveCourse(this.state.course);
        
        //actions.saveCourse(this.state.course);
        //this.context.router.push('/courses');
    }
    onReturn(event){
        event.preventDefault();
        debugger;
        this.context.router.push('/courses');
    }

    render() {
        debugger;
        return (
            <CourseForm
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.state.authors}
                onChange={this.onEditForm}
                onSave={this.onClickSave}
                onReturn={this.onReturn}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: React.PropTypes.object.isRequired,
    authors: React.PropTypes.array.isRequired,
    actions: React.PropTypes.func.isRequired
};
ManageCoursePage.contextTypes = {
    router: React.PropTypes.object
};

function getCourseById(courseId, courses) {
    debugger;
    const course = courses.filter(course => course.id == courseId);
    if (course.length > 0) return course[0];
    return null;


}

function mapStateToProps(state, ownProps) {
    debugger;
    let initialCourse = { id: '', title: '', watchHref: '', authorId: '', length: '', category: '' };
    const courseId = ownProps.params.id;
    if (courseId && state.courses.length > 0) {
        initialCourse = getCourseById(courseId, state.courses);
    }
    debugger;
    const authorFormattedForDropDown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });
    debugger;
    return {
        course: initialCourse,
        authors: authorFormattedForDropDown
    };
}
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);