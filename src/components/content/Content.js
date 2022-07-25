import './Content.css'
import {FaAngleLeft} from "react-icons/fa"
import {FaAngleRight} from "react-icons/fa"
import Capa from "../../images/capa.png"


function Content(){

    return(
        <div>
            <div className='header1'>
                <button className='btn-left'><FaAngleLeft size="20px"/></button>
                <button className='btn-right'><FaAngleRight size="20px"/></button>

                <div className='img-title'>
                    <img src={Capa}/>
                </div>
                <div className='title'>
                    <label>PLAYLIST</label>
                    <h1>Rock</h1>
                    <label>Dudux_t • 4 curtidas • 317 músicas, <span>cerca de 22h</span></label>
                </div>
            </div>
        </div>
    );

}

export default Content