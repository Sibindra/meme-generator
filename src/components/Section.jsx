import React from "react";

import memesData from "../memesData";


export default function Section() {
    function getmemeImage() {
        let url;
        const memeArray = memesData.data.memes;
        const randomNo = Math.floor(Math.random() * memeArray.length);
        url = memeArray[randomNo].url;
        console.log(url);
    }

    document.getElementById('btn').onclick=getmemeImage;


    return <div id="section">works</div>;
}
