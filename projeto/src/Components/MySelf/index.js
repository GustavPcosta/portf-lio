import "./styles.css";
import Gustt from '../../assets/gustt.jpg';
function Myself(){
    return(
        <div className="container-myself">
            <img src={Gustt} alt='jpg'></img>
            <div>
            <strong>About Me</strong>
            <span>Olá, me chamo Gustavo,sou desenvolvedor fullstack e atualmente estou à procura de uma oportunidade de emprego.
            tenho formação pela Cubos Academy, escola que estar há 8 anos no mercado de tecnologia.   
            </span>
            </div>
        </div>

    )
}
export default Myself;