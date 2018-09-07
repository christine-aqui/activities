import React from 'react';

const Math = props => {
  let value;
  (props.operator === "+") ? (value = props.num1 + props.num2) : console.log("error");
  (props.operator === "-") ? (value = props.num1 - props.num2) : console.log("error");
  (props.operator === "*") ? (value = props.num1 * props.num2) : console.log("error");
  (props.operator === "/") ? (value = props.num1 / props.num2) : console.log("error");
  return <span style={{fontSize:`${value}px`}}>{value}</span>
}


export default Math;