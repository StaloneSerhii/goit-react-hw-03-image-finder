import React from "react";
import './button.styled.css'

export const Btn = ({addPages}) =>{
   return <button className="Button" onClick={addPages}>Load More</button>
}