import "./BannerMain.css";

// export const Background = () => {
//     return <div className='fondo'>
//     <img src='/img/fondo.png' alt='fondo' ></img>
// </div>
// }

const BannerMain = ({children}) => {
    // const { selectedVideo } = props

    return (
        <div className='fondo'>
            <img src='/img/fondo.png' alt='fondo' className="ImgFondo" ></img>
            <div className="BannerM">
                <div className="FrontEnd">
                    <button className="ButtonFrontEnd"> Front End </button>
                    <h3 className="subtitulo">Challenge React</h3>
                    <p className="BannerInfo">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                <div className="BannerImg">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default BannerMain;