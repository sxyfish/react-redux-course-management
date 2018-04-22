import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, onChange, errors, allAuthors, loading, onSave, onReturn }) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                error={errors.title}
                name="title"
                label="Title"
                value={course.title}
                //placeholder={course.placeholder}
                onChange={onChange}
            />
            <SelectInput
                error={errors.title}
                name="authorId"
                label="Author"
                value={course.authorId}
                onChange={onChange}
                options={allAuthors}
                defualtOption="Select Author"
                error={errors.authorId}
            />
            <TextInput
                error={errors.category}
                name="category"
                label="Category"
                value={course.category}
                //placeholder={course.placeholder}
                onChange={onChange}
            />
            <TextInput
                error={errors.length}
                name="length"
                label="Length"
                value={course.length}
                //placeholder={course.placeholder}
                onChange={onChange}
            />

            <input type="submit"
                disabled={loading}
                value={loading ? "Saving..." : "Save"}
                className="btn btn-primary"
                onClick={onSave}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <input type="submit"
                value="Return"
                className="btn btn-primary"
                onClick={onReturn}
            />


        </form>
    );
};

CourseForm.propTypes = {
    errors: React.PropTypes.object,
    course: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onReturn:React.PropTypes.func.isRequired,
    allAuthors: React.PropTypes.array,
    loading: React.PropTypes.bool
};
export default CourseForm;