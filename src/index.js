import React from "react";
import ReactDOM from "react-dom";
//import FirstComponent from "./firstComponent";
//import SecondComponent from "./SecondComponent";
//import NestedComponent from "./NestedComponent";
import BookStore from "./BookStore";


ReactDOM.render(
  <React.StrictMode>
    <BookStore /> {/* this is how we use our second component */}
  </React.StrictMode>,
  document.getElementById('root')
);



