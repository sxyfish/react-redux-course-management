import React, { PropTypes } from 'react';

const TextInput = ({ error, name ,label,value,onChange}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
        wrapperClass += ' ' + 'has error';
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
            <div className='field'>
                <input 
                    type="text" 
                    name={name}
                    value={value}
                    // placeholder={placeholder}
                    className='form-control'
                    onChange={onChange}
                />
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>

        </div>
    );
};

TextInput.propTypes={
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    onChange:PropTypes.func.isRequired

};

export default TextInput;