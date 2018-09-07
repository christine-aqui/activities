import React from "react";

const name = 'Chris';
const letterNum = name.length;
const reaction = " is lovely"


const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {letterNum} letters</h2>
        <h2>I think React {reaction}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
