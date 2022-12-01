import React from "react";

export default function Section(props) {
    return (
        <div id="section">
            <img src={props.url} alt={props.url} id="img" />


            <h2 id="topText" className="memeText">Shut Up</h2>
            <h2 id="bottomText" className="memeText">and Take my money</h2>

        </div>
    );
}
