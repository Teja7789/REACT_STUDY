import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Hello , React Dev");

console.log(React,"react");
console.log(heading,"heading");


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(ReactDOM,"reactDom");

root.render(heading)