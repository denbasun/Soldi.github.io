import aboutUsPic from '../../../src/assets/aboutUsPic.png'
import './AboutUs.scss';
import '../../style/style.scss';
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

function AboutUs({setRef}) {
    const { t } = useTranslation()
    const aboutUsRef = useRef(null);

    useEffect(()=>{
        if(aboutUsRef.current){
            setRef(aboutUsRef)
        }
        return () => {
            aboutUsRef.current = null;
        };
    },[])

    return(
        <section ref={aboutUsRef} id={1}className="about-us">
            <div className="about-info-wrapper">
                <div className="blue-text">{t('aboutUs.sectionTitle')}</div>
                <h2>{t('aboutUs.header-h2')}</h2>
                <div className="about-descr">{t('aboutUs.description_pt1')}<br></br>
                <br></br>
                {t('aboutUs.description_pt2')}</div>
            </div>
            <img className="about-us-pic" src={aboutUsPic} alt="about us picture" />
        </section>
    )
}
  
export default AboutUs;