import React from 'react'
import "./HomePage.css"
import { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { Link } from 'react-router-dom'
const HomePage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then(resp => resp.json())
      .then(info => setData(info.characters))
  }, [])

  return (
    <div className='Home-Page'>
      {
      data.map((elem)=>{
        return(
          <div key={elem.id}>
            <Link className='texto' to={"/Detalles/" + elem.id}>
            <CharacterCard img={elem.images[0]} name={elem.name} id={elem.id} sexo={elem.personal.sex} clan={elem.personal.clan? elem.personal.clan:"No tiene"} 
            debut={elem.debut.manga} jutsu={elem.jutsu[0]} bloodType={elem.personal.bloodType? elem.personal.bloodType:"Desconocido"} tools={elem.tools? elem.tools:"No tiene"}
            />
            </Link>

          </div>
        )
      })
      }

    </div>
    

  )
}

export default HomePage
