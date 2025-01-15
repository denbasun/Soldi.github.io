import '../../style/style.scss';
import './Contacts.scss';
import '../../style/button.scss';
import unionImage from '../../assets/Union.png'
import telegram from '../../../src/assets/telegram.png'
import gmail from '../../../src/assets/mail.png'
import { useRef, useEffect } from 'react';
import Form from '../form/Form'
function Contacts({setRef}) {
    
    const contactsRef = useRef(null);

    useEffect(()=>{
        if(contactsRef.current){
            if(setRef){
                setRef(contactsRef)
            }
            
        }
        return () => {
            contactsRef.current = null;// очистка рефа после размонтирования
        };
    },[])

    return (
    <section ref={contactsRef} id={5} className="contacts">
        <div className="contacts-wrapper">

            <div className="contact-card">
                <img className="contact-union-circles" src={unionImage} alt="circles"  />
                    
            </div>
            <div className="socialmedia-wrapper">
                        <div className="social-logo" href="#">
                            <img  src={gmail} alt="gmail logo"  />
                            <div className="social-media-text">soldi@gmail.com</div>
                        </div>
                        <div className="social-logo" href="#">
                            <img  src={telegram} alt="telegram logo"  />
                            <div className="social-media-text">@soldi</div>
                        </div>
                    
            </div>
            <Form/>
            
        </div>
        <hr/>
        <div className="footer_text">© Soldi. All rights reserved.</div>
    </section>
    );
  }
  
  export default Contacts;
  