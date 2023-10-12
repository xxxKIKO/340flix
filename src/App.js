import './Global.css';
import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Error404 from './Pages/error404';
import NewVideo from './Pages/newvideo';

function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='*' element={ <Error404/> }/>
          <Route path='/newvideo' element={ <NewVideo/> }/>
        </Routes>
        <Footer />
    </Router>


    </>

  );
}

export default App;
