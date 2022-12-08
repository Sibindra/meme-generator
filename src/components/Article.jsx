import React, { useState } from "react";

import Section from "./Section";

export default function Article() {
    // eslint-disable-next-line
    const [allMemes, setAllMemes] = useState([]);


    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    console.log(allMemes);

    // useState to hold form data
    const [memeText, setMemeText] = useState({
        first: "shut up ",
        second: "and take my money",
    });

    // console.log(memeText)

    function handleChange(event) {
        setMemeText((prevText) => {
            return {
                ...memeText,
                [event.target.name]: event.target.value,
            };
        });
    }

    // useState holding current memes data
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg",
    });

    // useState holding all the memes data

    function getMemeImage() {
        // const allMemes=allMemes.data.memes;
        const randomNo = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNo].url;

        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
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
                        value={memeText.first}
                    />
                    <input
                        type="text"
                        placeholder="and take my money"
                        id="i2"
                        className="text"
                        name="second"
                        onChange={handleChange}
                        value={memeText.second}
                    />
                </div>

                <button id="btn" onClick={getMemeImage}>
                    Generate a new Image
                </button>
            </div>
            <Section
                url={meme.randomImage}
                topText={memeText.first}
                bottomText={memeText.second}
            />
        </>
    );
}
