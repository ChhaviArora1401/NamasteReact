import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) =>  HTMLElement(render)
// const heading = React.createElement(
//     "h1", 
//     {id: "heading1"}, 
//     "Hello World from React!"
// );

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
// const heading = (
//   <h1 id="heading1" className="head" tabIndex="1">
//     Namaste React using JSX
//   </h1>);

// React Component (Arrow function)
const Title = () => (
  <h1 id="heading1" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>);

// React component (function)
// const Title = function () {
//   return (
//   <h1 id="heading1" className="head" tabIndex="1">
//     Namaste React using JSX
//   </h1>);
//   };

const elem = <span>Hey</span>
// React Element
const title = (
  <h1 id="heading1" className="head" tabIndex="1">
   {elem} Namaste React using JSX
  </h1>);

// React Component
// Class Based Components - OLD
// Functional Components - NEW 

const fn = () => true;
const fn1 = () => { return true };

const number = 10000;

// React Functional Component --  function that returns some JSX / React Element
// Component Composition (jargon)
const HeadingComponent = () => {
  return <div id="container">
    <h2>{number}</h2> {100 + 200} {console.log("a")} {/* any javaScript expression */}
    <Title /> {/*component*/}
    <Title></Title>
    {Title()}
    {title} {/*element*/}
    <h1 className="heading1">
      React Functional Component
    </h1>
  </div>;
}

// without return statement
const HeadingComponent1 = () => (<h1 className="heading1">React Functional Component</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // for React Element Rendering
root.render(<HeadingComponent />); // for React Component Rendering