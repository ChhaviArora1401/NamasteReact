import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement(Object) =>  HTMLElement(render)
// const heading = React.createElement(
//     "h1", 
//     {id: "heading1"}, 
//     "Hello World from React!"
// );

// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

// JSX =>Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element
// const heading = (
//   <h1 id="heading1" className="head" tabIndex="1">
//     Namaste React using JSX
//   </h1>);

const Title = () => (
  <h1 id="heading1" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>);

// React Component
// Class Based Components - OLD
// Functional Components - NEW 

const fn = () => true;
const fn1 = () => { return true };

// React Functional Component --  function that returns some JSX
// Component Composition
const HeadingComponent = () => {
  return <div id="container">
    <Title />
    <h1 className="heading1">
      React Functional Component
    </h1>
  </div>;
}

const HeadingComponent1 = () => (<h1 className="heading1">React Functional Component</h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent />);