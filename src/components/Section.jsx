import React from "react";



export default function Section(props) {

    return <div id="section">
        <img src={props.url} alt={props.url} id="img"/>
    </div>;
}
