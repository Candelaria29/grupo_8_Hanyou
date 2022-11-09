import '../css/sidebar.css';
import Navbar from './navbar.jsx';
import logo from '../img/logo4.png';

function Sidebar () {
    return (
        <header>
            <picture id='logo'><img src={logo}></img></picture>
            <Navbar/>
            <h4 id='author'>By Nico Cilio y Cande Barrios</h4>
        </header>

    )
}

export default Sidebar