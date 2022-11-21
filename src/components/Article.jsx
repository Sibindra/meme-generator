import React, { useState } from "react";

import memesData from "../memesData";

import Section from "./Section";

export default function Article() {

    const [allMemeImages,setAllMemeImages]=useState(memesData);

    // useState holding current memes data
    const [meme,setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/3si4.jpg"
    });


    // useState holding all the memes data 

    function getMemeImage(){
        const memesArray=allMemeImages.data.memes;
        const randomNo=Math.floor(Math.random()*memesArray.length);
        const url=memesArray[randomNo].url;

        setMeme(prevMeme=>({
            ...prevMeme,randomImage:url
        }))
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

                <button id="btn" onClick={getMemeImage}>
                    Generate a new Image
                </button>
            </div>
            <Section url={meme.randomImage} />
        </>
    );
}
