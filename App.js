import React from "react";
import ReactDOM from "react-dom/client";
/**
 * 
 * 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement("div", {id: "parent"}, 
    [
    React.createElement("div", {id: "child", key: '0'}, [
        React.createElement("h1", {key: '0'}, ""), 
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {id: "child2", key: '1'}, [
        React.createElement("h1", {}, "I am h1 tag"), 
        React.createElement("h2", {}, "I am h2 tag")
    ]),
]);

const heading = React.createElement(
    "h1", 
    {id: "heading1"}, 
    "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);