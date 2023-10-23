import "./ListaCategorias.css"

const ListaCategorias = (props) => {


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarCat(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categorias</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Categoria</option>
            { props.categorias.map( (categoria, index) =>  <option key={index} value={categoria}>{categoria}</option>) }
        </select>
    </div>
}

export default ListaCategorias;