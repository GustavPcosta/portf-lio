

import './styles.css';

function Header(){
    return(
    <header>
        <div>
            logo
        </div>
        <div className='container-menu'>
           <ul className='container-ul'>
           <li><a href='/'>About Me</a></li>
           <li><a href='/'>Linkedin</a></li>
           <li><a href='/https://github.com/GustavPcosta/filmesDev'>Portfólio</a></li>
            <li><a href='/'>Contato</a></li>
            <li><a href='/'>Github</a></li>
           </ul>
        </div>
    </header>
    
    )
}
export default Header