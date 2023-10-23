import "./FormCat.css"
import Campo from '../Campo/Campo';
import Button from '../Button/Button';
import { useState } from 'react';

const FormCate = (props) => {

    const { registrarCategoria } = props;

    const [titulo,actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        
        let datosAEnviar = {
            cat: titulo,
            color: color,
        }
        // registrarVideo(datosAEnviar);
        registrarCategoria(datosAEnviar);
    }

    return <section className="formulario">
        <h1 className='videoNuevo'>Nuevo Video</h1>
        <form onSubmit={manejarEnvio}>
            <h2> Rellena el Formulario para la nueva categoría </h2>
            <Campo
                titulo="Nombre de la Categoria"
                placeholder="Ingresa el nombre de la Categoria"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                className="campo-color"
                titulo="Color" 
                placeholder="Ingresar Color en HEX" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />

            <section className='container'>
                {/* <Link className='agregarVideo'> */}
                <Button
                    texto='Registrar Categoria'
                />
                {/* </Link> */}
            </section>


        </form>
    </section>
}

export default FormCate;