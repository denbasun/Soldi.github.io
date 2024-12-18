import logo from '../../../src/logo_blue.png'
import './Header.scss';
import { useState, useEffect, memo, useCallback} from 'react';
import '../../style/style.scss';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const linksData = [
    {id: 1,text: 'About us'},
    {id: 2,text: 'How It Works'},
    {id: 3,text: 'How To Start'},
    {id: 4,text: 'Reviews'},
    {id: 5,text: 'Contacts'},
    {id: 6,text: 'FAQ'},
]
const Header = memo(({childRefs}) =>{
    console.log('Render header ')
    
    const [clickedId, setClickedId] = useState(null);
    const [activeRef, setActiveRef] = useState(0);
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    const handleClick = useCallback((index, offset) => {
        setClickedId(index);
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }, []);

    useEffect(() => {
        
        const loadData = async() =>{
            
            const result = await childRefs()

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                   
                    if(entry.isIntersecting){
                        
                        setActiveRef(entry.target.id)
                       
                    }      
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            });

            result.forEach((item, i) => {
                if(clickedId == i-1) {
                    
                    if(item.current){
                       
                        const offset = 100; // Отступ для нашей фиксированного nav меню
                        const elementPosition = item.current.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - offset;
    
                        handleClick(clickedId, offsetPosition)
                    }
                }
                if(clickedId == 5){
                    setActiveRef(6)
                    handleClick(clickedId, 0)
                    
                }
                if (item.current) {
                    observer.observe(item.current);
                }
            });

            return () => {
                result.forEach((ref) => {
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                });
                
            };
        }
            
        loadData()
        
    }, [clickedId, childRefs]);

   

    return (
    <section className="header">
        <nav className="navbar">
            <Link onClick={()=>handleClick(-1)} to='/' className="logo-wrapper">
                <img src={logo} alt="logo" ></img>
            </Link >
            <ul className="nav-links">
                {linksData.map((element, i)=>{
                    const {id, text} = element
                    return(
                        <li  key={id}><Link to={i === 5 ? "/help" : '/'} onClick={() => handleClick(i)} className={activeRef == id ? "active" : ''}>{text}</Link></li>
                    )
                })}
            </ul>
            <div className="language-selector">
                <select onChange={(e) => changeLanguage(e.target.value)} className='selection' name="language">
                    <option  value="en">ENG</option>
                    <option  value="cz">CZ</option>
                    <option  value="ua">UKR</option>
                </select>
            </div>
            
        </nav>
          
        <hr/>
    </section>
    );
  })
  
  export default Header;
  