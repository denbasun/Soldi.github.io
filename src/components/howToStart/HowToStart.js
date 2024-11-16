import scanPicture from '../../../src/assets/scan_picture.png'
import domainPicture from '../../../src/assets/domain_picture.png'
import unionCirclesPic from '../../../src/assets/Union_circles.png'
import './HowToStart.scss';
import '../../style/style.scss';
import {useRef, useEffect } from 'react';

function HowToStart({setRef}) {
    const howToStartRef = useRef(null);

    useEffect(()=>{
        if(howToStartRef.current){
            setRef(howToStartRef)
        }
        return () => {
            howToStartRef.current = null;// очистка рефа после размонтирования
        };
    },[])

    return(
        <section  ref ={howToStartRef} id={3} className="how-to-start">
            <img className="union-circles-pic" src={unionCirclesPic} alt="union circles picture" />
            <div className="how-to-start-wrapper">
                <a href="#" className="link-text">HOW TO START</a>
                <h2>To start work with us we need</h2>
            </div>
            <div className="how-to-start-card-wrapper">
                <div className="how-to-start-card">
                    <div className="how-to-start-text">License and link to the main domain to prove<br></br> the legality of your business</div>
                    <img src={domainPicture} alt="domain picture"/>
                </div>
                <div className="how-to-start-card">
                    <div className="how-to-start-text">Permission to transfer user documents *</div>
                    <img src={scanPicture} alt="scan picture" className="scan-picture"/>
                    <div className="how-to-start-text-special">* Some of our partners may ask for KYC and to <br></br> simplify the flow, we can transfer the <br></br> documents that you provide to us</div>
                </div>
            </div>
        </section>
    )
}
  
  export default HowToStart;