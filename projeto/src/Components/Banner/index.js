
import Myself from '../MySelf'
import Curriculo from '../../assets/curriculo.pdf'
import './styles.css'

function Banner(){
    return(
        <div className='container-banner'>
            <div>
            <h2>HI</h2>
            </div>
            <div>
            <h1 className='principal'>Fullstack Developer</h1>
            </div>
            <p>Gustavo</p>
            <a href={Curriculo} download="myCurriculo" target='_blank'>
            <button className="">Download Currículo</button>
            </a>
           
            <Myself/>
        </div>
    )
}

export default Banner