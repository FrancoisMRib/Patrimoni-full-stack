import HeaderImg from '../img/Fond_bandeau_clair-removebg-preview 1.png';

import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <div id="Header">
            <img src={HeaderImg} alt='HeaderImg' />
            <div id="HeaderOptions">
                <Link to={'/connexion'}>Se connecter</Link>
                <div id="separation" />
                {/* <img src="./src/img/globe_icon.png" alt="" className='clear'/> */}
                <Link to={'/options'}>Options</Link>
            </div>
            <div id='HeaderMenu'>
                <Link to={`/`} className="écrit">Accueil</Link>
                <Link to={`/itineraire`}>Itinéraires</Link>
                <Link to={`/games`}>Mini-jeux</Link>
                <Link to={`/about`}>A propos de Patrimoni</Link>
                <Link to={`/links`}>Liens utiles</Link>
            {/* <p><Link to="/">Accueil</Link></p>
                <p><Link to="/itineraires">Itinéraires</Link></p>
                <p><Link to="/jeux">Mini-jeux</Link></p>
                <p><Link to="/a-propos">A propos de Patrimoni</Link></p>
                <p><Link to="/liens">Liens utiles</Link></p> */}
                <div id='HeaderSearch'>
                    <i className="fas fa-search"></i>
                    <input placeholder='Rechercher' />
                </div>
            </div>

        </div>
    );
}
