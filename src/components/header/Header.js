import logo from '../../../src/logo_blue.png'
import './Header.scss';
function Header() {
    return (
    <section className="header">
        <nav className="navbar">
            <a href="#" className="logo-wrapper">
                <img src={logo} alt="logo" ></img>
            </a>
            <ul className="nav-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">How To Start</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <div className="language-selector">
                <select className='selection' name="language">\
                    <option value="en">ENG</option>
                    <option value="ru">CZ</option>
                    <option value="de">UKR</option>
                </select>
            </div>
        </nav>
          
         
    </section>
    );
  }
  
  export default Header;
  