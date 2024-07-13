import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{

    const placeholderModificado = `${props.placeholder}...`

    //destructuracion 

    const {type = "text"} = props

    console.log(type)

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo.toUpperCase()}</label>
        <input 
        placeholder= {placeholderModificado} 
        required = {props.required} 
        value= {props.valor}
        onChange= {manejarCambio}
        type = {type}
        />
    </div>
}

export default CampoTexto