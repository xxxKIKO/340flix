import React from "react";
import Slider from "react-slick";
import VideoCard from "../VideoCard/VideoCard";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'

const Slide = (props) => {

  const { onVideoSelect } = props

// const { urlVideo, tituloVideo, categoria} = props.videos;
const { cat } = props.datos;
// console.log(cat);
const { videos } = props
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      };

      return (
          videos.length > 0 &&
          <div className="slider-container">
            <button className="btnCategoria" >Categoria: {cat}</button>
            <Slider {...settings}>
              {
                videos.map((video, index) => <VideoCard 
                urlVideo={video.urlVideo}
                tituloVideo={video.tituloVideo}
                categoria={video.categoria}
                key={index}
                onVideoSelect={onVideoSelect}
              />)  
              }       
          </Slider>
      </div>
      );
};

export default Slide;