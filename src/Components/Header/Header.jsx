import Button from "../Button/Button";
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
    return <header className="header">
        <Link to='/'>
            <img src="/img/LogoMain.png" alt="Logo" />
        </Link>
        
        <Link to='/newvideo' className="linkNuevo">
            <Button texto='Nuevo Video'/>
        </Link>    
        
       
    </header>
}

export default Header;