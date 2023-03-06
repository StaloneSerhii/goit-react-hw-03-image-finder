import React from "react";
import './button.styled.css'
import PropTypes from 'prop-types';

export const Btn = ({addPages}) =>{
   return <button className="Button" onClick={addPages}>Load More</button>
}

Btn.propTypes = {
   addPages: PropTypes.func.isRequired
}