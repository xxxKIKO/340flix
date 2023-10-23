import React from "react"
import Formulario from "../Components/Formulario/Formulario";

const NewVideo = (props) => {

    const { registrarVideo } = props

    return <>
        <Formulario registrarVideo={registrarVideo} categorias={props.categorias}/>
    </>
}

export default NewVideo;