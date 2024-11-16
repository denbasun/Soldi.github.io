import aboutUsPic from '../../../src/assets/aboutUsPic.png'
import './AboutUs.scss';
import '../../style/style.scss';
import { useRef, useEffect } from 'react';
function AboutUs({setRef}) {
    const aboutUsRef = useRef(null);

    useEffect(()=>{
        if(aboutUsRef.current){
            setRef(aboutUsRef)
        }
        return () => {
            aboutUsRef.current = null;// очистка рефа после размонтирования
        };
    },[])

   
    return(
        <section ref={aboutUsRef} id={1}className="about-us">
            <div className="about-info-wrapper">
                <a href="#" className="link-text">About Us</a>
                
                <h2>Your payment solution</h2>
                <div className="about-descr">SOLDY is a payment solution that allows you to accept fiat from clients and receive crypto into your account.<br></br>
                <br></br>
                We bring together a large number of partners, which allows us to ensure a variety of payment pairs,
                the availability of liquidity, and the diversification of risks.</div>
            </div>
            <img className="about-us-pic" src={aboutUsPic} alt="about us picture" />
        </section>
    )
}
  
  export default AboutUs;