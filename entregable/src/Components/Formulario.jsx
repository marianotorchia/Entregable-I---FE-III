import Card from './Card'
import { useState } from 'react'

function Formulario (props) {
    const [inputNombre, setInputNombre] = useState ('')
    const [inputNacionalidad, setInputNacionalidad] = useState ('')
    
    function handleChangeNombre (event) {
        console.log(event.target.value)
        const cleanNombre = event.target.value.trim()
        setInputNombre(cleanNombre)
    }

    function handleChangeNacionalidad (event) {
        console.log(event.target.value)
        setInputNacionalidad(inputNacionalidad)
    }


    function handleSubmit (event) {
        event.preventDefault()
        if (inputNombre.trim().length < 3 || inputNombre.startsWith(" ")) {
            alert   ("Por favor, verifica los campos ingresados")
        }
        console.log("enviando..")
        props.onSubmit(inputNombre, inputNacionalidad)
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Ingresá tu nombre"  value={inputNombre} onChange={handleChangeNombre}></input>
            <hr/>
            <input type="text" placeholder="Ingresá tu nacionalidad"  value={inputNacionalidad} onChange={handleChangeNacionalidad}></input>
            <hr/>
            <button type="submit">Enviar</button>
        </form>
        
    )
}



export default Formulario