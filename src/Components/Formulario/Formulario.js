import './Formulario.css';
import Campo from '../Campo/Campo';
import Button from '../Button/Button';
import { useState } from 'react';

const Formulario = () => {

    const [titulo,actualizarTitulo] = useState("")
    const [url,actualizarUrl] = useState("")
    const [cat,actualizarCat] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        // console.log("Manjear el envío ");
        let datosAEnviar = {
            tituloVideo: titulo,
            urlVideo: url,
            categoria: cat
        }
        // registrarVideo(datosAEnviar);
    }

    return <section className="formulario">
        <h1 className='videoNuevo'>Nuevo Video</h1>
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el Formulario con los datos del video... </h2>
            <Campo
                titulo="Titulo del Video"
                placeholder="Ingresa el titulo del video"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo
                titulo="Url del Video"
                placeholder="Ingresa el titulo del video"
                required
                valor={url}
                actualizarValor={actualizarUrl}
            />

            <Campo
                titulo="Categoria del Video"
                placeholder="Ingresa la Categoria del video"
                required
                valor={cat}
                actualizarValor={actualizarCat}
            />

            <Button
                Texto='Agregar Video'
            />
        </form>
    </section>
}

export default Formulario;