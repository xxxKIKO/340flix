import BannerMain from "../Components/BannerMain/BannerMain";
import Slide from "../Components/Slider/Slider";
import Player from "../Components/Player/Player";
import { useState } from "react";

const Home = () => {

    const [selectedVideo, setSelectedVideo] = useState("https://www.youtube.com/embed/qZpq_lxXPrw?si=UE9GQWLyNp9pfYo4");
    const [selectedVideoTitle, setSelectedVideoTitle] = useState('Abuelito Pinta');

    const videos = [
        {
            tituloVideo: 'Yage Sanador',
            urlVideo: "https://www.youtube.com/embed/HPeH7hz5RMM?si=NG6Dj74tU8iZ2Owg",
            categoria: 'musica medicina'
        },
        {
            tituloVideo: 'Tzen Tzen Re Rei',
            urlVideo: "https://www.youtube.com/embed/IjGMzVScUKI?si=mb2maawhDIB7b__g",
            categoria: 'musica medicina'
        },
        {
            tituloVideo: 'Hubo un Tiempo',
            urlVideo:"https://www.youtube.com/embed/nje64f_IBSA?si=IoVfcq-BQL7oDwy5",
            categoria: 'musica medicina'
        },
        {
            tituloVideo: 'Ya vienen Bajando',
            urlVideo:"https://www.youtube.com/embed/RTDVWANpoFY?si=aLd-xhR7XUHqvOEM",
            categoria: 'musica medicina'
        },
        {
            tituloVideo: 'Meditacion poderosa para manifestar',
            urlVideo: "https://www.youtube.com/embed/IG7R2AxW6Tk?si=Y0IiCeCR9alRCV2W",
            categoria: 'meditacion'
        },
        {
            tituloVideo: 'Meditacion para comenzar el dia',
            urlVideo: "https://www.youtube.com/embed/taQXDJrOUZI?si=FiFGXGWfc3iZU9dr",
            categoria: 'meditacion'
        },
        {
            tituloVideo: 'Meditacion Salud, Riqueza y Amor',
            urlVideo: "https://www.youtube.com/embed/Be9UIt47X44?si=VYiNgbqpwpvC6Tnk",
            categoria: 'meditacion'
        },
        {
            tituloVideo: 'Meditacion Salto Cuantico',
            urlVideo: "https://www.youtube.com/embed/gC4oZho6Nus?si=qDP0QM2PEJMvqQC2",
            categoria: 'meditacion'
        },
        {
            tituloVideo: 'Mantra mas poderoso y secreto',
            urlVideo: "https://www.youtube.com/embed/cUGDc53WcpI?si=XmuFyh2qEmx97B4E",
            categoria: 'mantras'
        },
        {
            tituloVideo: 'Hari om Nama Shivaya',
            urlVideo: "https://www.youtube.com/embed/811DzfOnxWY?si=XXFLJN04L9X6YVTD",
            categoria: 'mantras'
        },
        {
            tituloVideo: 'Mantra Destruye Obstaculos',
            urlVideo: "https://www.youtube.com/embed/GiGe0EQ-QTY?si=I86SwftfegwnB1MI",
            categoria: 'mantras'
        },
        {
            tituloVideo: 'PODEROSO MAHAMRITYUNJAJA MANTRA',
            urlVideo: "https://www.youtube.com/embed/jwRRVorSzv4?si=FCLi0fF1J-GPPm9n",
            categoria: 'mantras'
        },
      ];

      const categorias = [
        {cat: 'musica medicina'},
        {cat: 'meditacion'},
        {cat: 'mantras'},
      ];

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
}

export default Home;