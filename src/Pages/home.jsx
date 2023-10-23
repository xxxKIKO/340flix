import BannerMain from "../Components/BannerMain/BannerMain";
import Slide from "../Components/Slider/Slider";
import Player from "../Components/Player/Player";
import { useState } from "react";



const Home = (props) => {

    const { videos, categorias } = props; 

    const [selectedVideo, setSelectedVideo] = useState("https://www.youtube.com/embed/qZpq_lxXPrw?si=UE9GQWLyNp9pfYo4");
    const [selectedVideoTitle, setSelectedVideoTitle] = useState('Abuelito Pinta');

    const handleVideoSelect = (urlVideo, tituloVideo) => {
        setSelectedVideo(urlVideo);
        setSelectedVideoTitle(tituloVideo);
    }

    return (
        <main>
            <div>
                <BannerMain>
                    <Player 
                    selectedVideo={selectedVideo} 
                    selectedVideoTitle={selectedVideoTitle}/>
                </BannerMain>
                {categorias.map((categoria, index) => <Slide
                datos={categoria}
                key={index}
                videos={videos.filter(video => video.categoria === categoria.cat)}
                fuente={videos}
                onVideoSelect={handleVideoSelect}
                />
                )}
            </div>
        </main>
    );
};

export default Home;