import React from 'react'
import "./CharacterCard.css"
const CharacterCard = (props) => {
    return (
            <div className='Contenedor'>
                <img className='Contenedor-Imagen' src={props.img} alt="Imagen" />
                <div className='Contenedor-Informacion'>
                    <p><span className='Negrita'>Nombre: </span>{props.name}</p>
                    <p><span className='Negrita'>Id: </span> {props.id}</p>
                    <p><span className='Negrita'>Sexo: </span>{props.sexo}</p>
                    <p><span className='Negrita'>Debut: </span>{props.debut}</p>
                    <p><span className='Negrita'>Clan: </span> {props.clan}</p>
                    <p><span className='Negrita'>Jutsu: </span>{props.jutsu}</p>
                    <p><span className='Negrita'>bloodType: </span>{props.bloodType}</p>
                    <p><span className='Negrita'>Tools: </span>{props.tools}</p>

                </div>
            </div>
    )
}

export default CharacterCard
