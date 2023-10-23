import './Global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './Pages/home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Error404 from './Pages/error404';
import NewVideo from './Pages/newvideo';
import NewCat from './Pages/newcat';

function App() {

  const [videos, actualizarVideos] = useState([
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
  ]);

  const [categorias, actualizarCategorias] = useState([
    {
      cat: 'musica medicina',
      color: '#ffffff'
    },
    {
      cat: 'meditacion',
      color: '#ffffff'
    },
    {
      cat: 'mantras',
      color: '#ffffff'
    },
  ]);

  //funcion para registrar al colaborador
  const registrarVideo = (newVideo) => {
    console.log("Nuevo video", newVideo)
    // Spread Operator, realiza una copia de los valores actuales y posteriormente agrega el colaborador
    actualizarVideos([...videos,newVideo])
  }

  const registrarCategoria = (nuevaCategoria) => {
    console.log(nuevaCategoria)
    actualizarCategorias([...categorias, {...nuevaCategoria}])
  }

  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home videos={videos} categorias={categorias}/> }/>
          <Route path='*' element={ <Error404/> }/>
          <Route path='/newvideo' 
          element={ <NewVideo 
                        registrarVideo={registrarVideo}
                        categorias={categorias.map((categoria) => categoria.cat)}/> }/>
        <Route path='/newcat' element={ <NewCat
                        registrarCategoria={registrarCategoria}
        /> }/>
        </Routes>
        <Footer />
    </Router>


    </>

  );
}

export default App;
