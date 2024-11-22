import logo from '../../../src/logo_blue.png'
import './Header.scss';
import { useState, useEffect, memo} from 'react';
import '../../style/style.scss';

const linksData = [

    {id: 1, text: 'About us'},
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
    
    const handleClick = (index)=>{
        setClickedId(index);
       
    }

    useEffect(() => {
        
        const loadData = async() =>{
            const result = await childRefs()
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    // console.log(entry);
                    if(entry.isIntersecting){
                        // console.log(entry)
                        setActiveRef(entry.target.id)
                        setClickedId(null)
                    }      
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.9,
            });

            result.current.forEach((ref) => {
                if (ref.current) {
                    observer.observe(ref.current);
                }
            });

            return () => {
                result.current.forEach((ref) => {
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                });
            };
        }
            
        
        loadData()
        

    }, []);
    
    useEffect(()=>{

        const loadData = async() =>{
            const result = await childRefs()
            if(result.current){
                result.current.forEach((item,i)=>{
                    if(clickedId == i-1) {
                        const offset = 100; // Отступ для нашей фиксированного nav меню
                        const elementPosition = item.current.getBoundingClientRect().top + window.scrollY;
                        const offsetPosition = elementPosition - offset;
    
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
    
                        
                    }
                })
            }
        }
        // console.log('UseEffect2')
        loadData()

    },[clickedId])

  

    return (
    <section className="header">
        <nav className="navbar">
            <a href="#" className="logo-wrapper">
                <img src={logo} alt="logo" ></img>
            </a>
            <ul className="nav-links">
                {linksData.map((element, i)=>{
                    const {id, text} = element
                    return(
                        <li   key={i}><div onClick={() => handleClick(i)} className={activeRef == id ? "active" : ''}>{text}</div></li>
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
  })
  
  export default Header;
  