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
    console.log('Header render ')
    
    const [clickedId, setClickedId] = useState(null);
    const [activeRef, setActiveRef] = useState(0);
    const { t, i18n } = useTranslation();
    const [clickedBurger, setClickedBurger] = useState(false)
    const smallWidth = window.matchMedia(`(max-width: 768px)`).matches
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
		// Функция для обновления ширины
		const handleResize = () => {
		    setWindowWidth(window.innerWidth);
		};

		// Подписываемся на событие изменения размера окна
		window.addEventListener("resize", handleResize);

		// Чистим обработчик при размонтировании компонента
		return () => {
		window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);

    useEffect(() => {
        console.log(smallWidth)
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
                threshold: 0.5,

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

   const burgerClick = () =>{
        setClickedBurger((clickedBurger) => !clickedBurger)
   }

    return (
        <section  className={clickedBurger ? "header header-burger" : 'header'}>
            <nav className="navbar">
                <Link onClick={()=>handleClick(-1)} to='/' className="logo-wrapper">
                    <img src={logo} alt="logo" ></img>
                </Link >


                <ul className={smallWidth ? (!clickedBurger ? "nav-links hide" : "nav-links nav-links-burger") : "nav-links"}>
                    {linksData.map((element, i)=>{
                        const {id, text} = element
                        return(
                            <li  key={id}><Link to={i === 5 ? "/help" : '/'} onClick={() => handleClick(i)} className={activeRef == id ? "active" : ''}>{text}</Link></li>
                        )
                    })}
                </ul>


                <div className={smallWidth ? (!clickedBurger ? "language-selector hide" : "language-selector language-selector-burger") : "language-selector"}>
                    <select onChange={(e) => changeLanguage(e.target.value)} className='selection' name="language">
                        <option  value="en">ENG</option>
                        <option  value="cz">CZ</option>
                        <option  value="ua">UKR</option>
                    </select>
                </div>

                {smallWidth ? <div onClick={burgerClick} className={!clickedBurger ? 'burgerBtn' : 'burgerBtn burgerBtn-active'}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div> : null}
                
            </nav>
            
            <hr className={clickedBurger ? "line line-burger" : 'line'}/>
        </section>
    );
  })
  
  export default Header;
  