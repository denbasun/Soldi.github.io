import scanPicture from '../../../src/assets/scan_picture.png'
import domainPicture from '../../../src/assets/domain_picture.png'
import './HowToStart.scss';
import '../../style/style.scss';
import {useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
function HowToStart({setRef}) {
    const howToStartRef = useRef(null);
    const { t } = useTranslation()

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
          
            <div className="text-header">
                <div className="blue-text">{t('howToStart.blueText')}</div>
                <h2>{t('howToStart.h2')}</h2>
            </div>
            <div className="how-to-start-card-wrapper">
                <div className="how-to-start-card">
                    <div className="how-to-start-text">{t('howToStart.text1')}</div>
                    <img src={domainPicture} alt="domain picture"/>
                </div>
                <div className="how-to-start-card">
                    <div className="how-to-start-text">{t('howToStart.text2')}</div>
                    <img src={scanPicture} alt="scan picture" className="scan-picture"/>
                    <div className="how-to-start-text-special">{t('howToStart.textSpecial')}</div>
                </div>
            </div>
        </section>
    )
}
  
  export default HowToStart;