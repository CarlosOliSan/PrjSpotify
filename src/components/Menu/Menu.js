import './Menu.css';
import Logo from "../../images/logo.png"

import {FaHome} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import {FaList} from "react-icons/fa"
import {FaPlusSquare} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"

function Menu(){
    return(
        <div className="header">
            <img src={Logo}/>
            <div className='list-nav'>                
                <ul>
                    <li className='list-item'><FaHome size="23px"/><a href="./Home.js">Início</a></li>
                    <li className="list-item"><FaSearch size="23px"/><a href="./Home.js">Buscar</a></li>
                    <li className="list-item"><FaList size="23px"/><a href="./Home.js">Sua Biblioteca</a></li>
                </ul>
            </div>
            <div className='list'>
                <ul>
                    <li className="list-item"><FaPlusSquare size="23px"/><a href="">Criar Playlist</a></li>
                    <li className="list-item"><FaHeart size="23px"/><a href="">Músicas Curtidas</a></li>
                </ul>
            </div>
            <div className='playlist'>
                <ul>
                    <li><a href="">Red Dead Redemption 2</a></li>
                    <li><a href="">LET'S FUCKING GOOOO...</a></li>
                    <li><a href="">Heavy Metal Classics</a></li>
                    <li><a href="">ELETRONICA HARDCORE</a></li>
                    <li><a href="">Internacional Antigas</a></li>
                    <li><a href="">treino dos cria</a></li>
                    <li><a href="">TRAP INTERNACIONAL</a></li>
                    <li><a href="">hora de fritar</a></li>
                    <li><a href="">Eletrônicas</a></li>
                    <li><a href="">Thiaguinho acústico</a></li>
                </ul>
            </div>
        </div>
    )

}

export default Menu