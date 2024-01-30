import React from "react";
import ReactDOM  from "react-dom/client";

//React.createElement => ReactElement JS Object => HTMLElement(render)
const heading = React.createElement("h1",{id:"heading"},"Hello , React Dev");

//Jsx => React.createElement => Object => HTMLElement(render)
//JSX
const jsxHeading = <h1 id="heading" tabIndex="5">Hello Jsx</h1>
//React Element
const elementHeading = (<h1 id="heading" tabIndex="5">
    Hello Jsx
    </h1>);

//React Functional Component
function getApi() {
    return "Hello,"
}
const data = getApi();
const HeadingComponent = () => (
    <div id="container">
        {data}  {/* <getApi/> === {getApi()} sanitise by babel of api data */}
        <h1 className="heading">React Functional Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
root.render(<HeadingComponent/>);