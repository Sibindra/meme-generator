import React from "react";


export default function Article() {
    return (
        <div id="article">
            <div id="inputContainer">
                <input
                    type="text"
                    placeholder="Shut Up"
                    id="i1"
                    className="text"
                />
                <input
                    type="text"
                    placeholder="and take my money"
                    id="i2"
                    className="text"
                />
            </div>

            <button id="btn">
                Generate a new Image
            </button>
        </div>
    );
}
