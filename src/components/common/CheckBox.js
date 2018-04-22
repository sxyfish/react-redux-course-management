import React, { Component } from "react";
const CheckBox=({course,onChange})=>{

    
    return (
        <input
            name={course.id}
            type="checkbox"
            checked={course.isDelete}
            onChange={onChange} />
    );
};
export default CheckBox;