import FormCate from "../Components/Formcat/FormCat";


const NewCat = (props) => {

    const { registrarCategoria } = props;

    return <>
        <FormCate registrarCategoria={registrarCategoria} />
    </>
}

export default NewCat;