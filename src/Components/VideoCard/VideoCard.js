import './VideoCard.css';
import React from "react";


const VideoCard = ({onVideoSelect, urlVideo, tituloVideo}) => {

    function obtenerThumbnailURL(urlDelVideo) {
        // Patrones de URL de YouTube comunes
        const patrones = [
          /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
          /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
          /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/,
        ];
      
        for (const patron of patrones) {
          const match = urlDelVideo.match(patron);
          if (match && match[1]) {
            const videoId = match[1];
            const thumbnailURL = `https://i3.ytimg.com/vi/${videoId}/0.jpg`; // Cambia "maxresdefault" a la resolución deseada
            // console.log(thumbnailURL);
            return thumbnailURL;
          }
        }
            // Si no se encuentra ninguna coincidencia, devuelve null
            return null;
      }
    
    return  <>
            {
            <div className="video-slide">
                <img 
                width="360" 
                height="215" 
                className='imagenVideo'
                src={obtenerThumbnailURL(urlVideo)} 
                alt="Reproducir video" 
                onClick={() => onVideoSelect(urlVideo, tituloVideo)} 
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></img>
                <h1 className='tituloVideo'>{tituloVideo}</h1>
            </div>
            }
            </>
}

export default VideoCard;