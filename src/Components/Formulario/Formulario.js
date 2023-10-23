import './Formulario.css';
import Campo from '../Campo/Campo';
import Button from '../Button/Button';
import { useState } from 'react';
import ListaCategorias from '../ListaCategorias/ListaCategorias';
import { Link } from 'react-router-dom';

const Formulario = (props) => {

    const { registrarVideo } = props;

    const [titulo,actualizarTitulo] = useState("")
    const [url,actualizarUrl] = useState("")
    const [cat,actualizarCat] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        
        let datosAEnviar = {
            tituloVideo: titulo,
            urlVideo: url,
            categoria: cat
        }
        // registrarVideo(datosAEnviar);
        registrarVideo(datosAEnviar);
    }

    return <section className="formulario">
        <h1 className='videoNuevo'>Nuevo Video</h1>
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el Formulario con los datos del video... </h2>
            {/* <TextField
                label="Titulo del Video"
                variant='outlined'
                fullWidth
                margin='dense'
                value={titulo}
                onChange={actualizarTitulo}
            /> */}


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

            <ListaCategorias 
                valor = {cat}
                actualizarCat = {actualizarCat}
                categorias = {props.categorias}
            />

            {/* <Campo
                titulo="Categoria del Video"
                placeholder="Ingresa la Categoria del video"
                required
                valor={cat}
                actualizarValor={actualizarCat}
            /> */}
            <section className='container'>
                <section className='agregarVideo'>
                <Button
                    texto='Agregar Video'
                />
                </section>
                <section className='agregarVideo'>
                <Button
                    texto='Limpiar'
                />
                </section>
                <Link to='/newcat' className='agregarVideo'>
                <Button
                    texto='Nueva Categoria'
                />
                </Link>
            </section>


        </form>
    </section>
}

export default Formulario;