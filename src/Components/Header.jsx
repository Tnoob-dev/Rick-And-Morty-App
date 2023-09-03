import { BsGithub } from 'react-icons/bs'

const Header = () => {

    return (
        <header>
            <div className="main-header">
                <a href="https://rickandmortyapi.com/" target="blank">
                    <span className="rick-text">Rick</span>
                    <span className="and-text">And</span>
                    <span className="morty-text">Morty</span>
                    <span className="api-text">API</span>
                </a>
                <ul>
                    <li>
                        <a href="https://github.com/Tnoob-dev/Rick-And-Morty-App/"><BsGithub className='github-icon'/></a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;

/////////////////////////////////////////////////////
// Cambiar color de los span que tengo aqui ahora //
////////////////////////////////////////////////////