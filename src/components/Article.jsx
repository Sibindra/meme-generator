import React, { useState } from "react";

import memesData from "../memesData";

import Section from "./Section";

export default function Article() {

    const [allMemeImages,setAllMemeImages]=useState(memesData);


    // useState to hold form data
    const [memeText,setMemeText]=useState({
        first:"shut up ",
        second:"and take my money"
    })

    console.log(memeText)

    function handleChange(event){
        setMemeText(prevText=>{
            return {
                ...memeText,
                [event.target.name]:event.target.value
            }
        })
    }
    

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
                        name="first"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="and take my money"
                        id="i2"
                        className="text"
                        name="second"
                        onChange={handleChange}
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
