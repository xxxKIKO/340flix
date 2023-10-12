import React from "react";
import './Player.css';

const Player = ({selectedVideo, selectedVideoTitle}) => {

    return <>
        <h1 className="tituloVideo">Reproduciendo: {selectedVideoTitle}</h1>
        <iframe 
            width="640" 
            height="360" 
            src={selectedVideo} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            autoPlay={true}
        ></iframe>
        </>
}

export default Player;