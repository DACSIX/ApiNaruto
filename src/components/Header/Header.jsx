import React from 'react'
import "./Header.css"
import "./img/logo.jpg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>
            <img className='logo' src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8f9e0b1b271c4f1880b7c36aa9a49348~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=16822&refresh_token=b95deb49d3711dbb23f561b597c98f95&x-expires=1730437200&x-signature=5bBGbb7tFmFeGMmeV7H1x2Ln7ek%3D&shp=a5d48078&shcp=81f88b70" alt="imagen" />

            <div className='Header-Titulo'>
                <img className='Titulo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1280px-Naruto_logo.svg.png" alt="Titulo" />
                <div className='Header-Titulo-Navegacion'>
                    <Link to={"/"}>
                    <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Inicio</Button>
                    </Link>
                    <Link to={"/Favoritos"}>
                    <Button className='Button' sx={{ margin: 3, width: 150 }} variant="contained">Favoritos</Button>
                    </Link>
                </div>
            </div>
                <input className='BarraTemporal' type="text" placeholder='buscar' />
        </div>
    )
}

export default Header
