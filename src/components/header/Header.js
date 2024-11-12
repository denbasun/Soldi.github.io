import logo from '../../../src/logo_blue.png'
import './Header.scss';
import { useState} from 'react';
import '../../style/style.scss';

const linksData = [
    {text: 'About us'},
    {text: 'How It Works'},
    {text: 'How To Start'},
    {text: 'Reviews'},
    {text: 'FAQ'},
    {text: 'Contacts'}
]
function Header({getId}){
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index)=>{
        setActiveIndex(index)
        getId(index)
        console.log(index)
        
    }
    
    return (
    <section className="header">
        <nav className="navbar">
            <a href="#" className="logo-wrapper">
                <img src={logo} alt="logo" ></img>
            </a>
            <ul className="nav-links">
                {linksData.map((element, i)=>{
                    const {ref, link, text} = element
                    return(
                        <li  key={i}><div onClick={() => handleClick(i)} className={activeIndex === i ? "active" : ''} href={link}>{text}</div></li>
                    )
                })}
            </ul>
            <div className="language-selector">
                <select className='selection' name="language">
                    <option value="en">ENG</option>
                    <option value="ru">CZ</option>
                    <option value="de">UKR</option>
                </select>
            </div>
            
        </nav>
          
        <hr/>
    </section>
    );
  }
  
  export default Header;
  