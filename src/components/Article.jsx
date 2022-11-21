import React, { useState } from "react";

import memesData from "../memesData";

import Section from "./Section";

export default function Article() {

    const [url,setUrl]=useState()
    
    function getmemeImage() {
        const memeArray = memesData.data.memes;
        const randomNo = Math.floor(Math.random() * memeArray.length);

        setUrl(url=>memeArray[randomNo].url);
    }

    return (
        <>
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

                <button id="btn" onClick={getmemeImage}>
                    Generate a new Image
                </button>
            </div>
            <Section url={url} />
        </>
    );
}
