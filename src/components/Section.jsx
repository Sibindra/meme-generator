import React from "react";

export default function Section(props) {
    return (
        <div id="section">
            <img src={props.url} alt={props.url} id="img" />

            <h2 id="topText" className="memeText">{props.topText}</h2>
            <h2 id="bottomText" className="memeText">{props.bottomText}</h2>

        </div>
    );
}
