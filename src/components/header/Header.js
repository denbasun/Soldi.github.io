import logo from '../../../src/logo_blue.png'
import './Header.scss';
function Header() {
    return (
    <div className="mainPage">
        <nav class="navbar">
            <a href="#" class="logo_wrapper">
                <img src={logo} alt="logo" ></img>
            </a>
            <ul class="nav-links">
                <li><a href="#about">О нас</a></li>
                <li><a href="#services">Услуги</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
    </div>
    );
  }
  
  export default Header;
  