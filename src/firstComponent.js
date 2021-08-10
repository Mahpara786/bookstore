import React from "react";
import { render} from "react-dom";

function FirstComponent() {
    return (
        <React.Fragment>
            <div>
                <h2>This is my first component</h2>
                <img src="penguin.jpg" alt="the penguin" width="500" height="320"></img>
            </div>
        </React.Fragment>
    )
}
export default FirstComponent