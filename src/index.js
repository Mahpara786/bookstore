import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from  "./firstComponent"; // here we have imported our first componennt
import SecondComponent from "./Second Component";

ReactDOM.render(
  <React.StrictMode>
    <FirstComponent />  {/*this is how we use a componenet */}
    <SecondComponent />
  </React.StrictMode>,
  document.getElementById('root')
);



