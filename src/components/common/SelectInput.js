import React, { PropTypes } from 'react';

const SelectInput = ({ error, name ,label,value,onChange,options,defualtOption})=>{

    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <div className='field'>
                <select name={name} value={value} className='form-control' onChange={onChange}>
                    <option value="">{defualtOption}</option>
                    {options.map(option=>
                         <option key={option.value} value={option.value}>{option.text}</option>
                    )}
                </select>
                {error && <div className='alert alert-danger'>{error}</div>}
            </div>

        </div>
    );
};

SelectInput.propTypes={
    error:PropTypes.string,
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    defualtOption:PropTypes.string

};

export default SelectInput;