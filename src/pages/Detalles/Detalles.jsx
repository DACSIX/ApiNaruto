import React from 'react'
import "./Detalles.css"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterVertical from '../../components/CharacterVertical/CharacterVertical';
const Detalles = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://dattebayo-api.onrender.com/characters")
            .then(resp => resp.json())
            .then(info => setData(info.characters))
    }, [])
    console.log(data)
    let { id } = useParams();
    console.log(id);
    return (
        <div className='detalles'>
            {
                data.map((elem) => {
                    if (elem.id === parseInt(id)) {
                        return (
                            <div key={elem.id}>
                                <CharacterVertical img={elem.images[0]} name={elem.name} id={elem.id} sexo={elem.personal.sex} clan={elem.personal.clan ? elem.personal.clan : "No tiene"}
                                    debut={elem.debut.manga} jutsu={elem.jutsu[0]} bloodType={elem.personal.bloodType ? elem.personal.bloodType : "Desconocido"} tools={elem.tools ? elem.tools : "No tiene"}
                                />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Detalles
