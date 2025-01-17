import { useRef, useEffect, useMemo} from 'react';
import unionCirclesPic from '../../../src/assets/Union_circles.png'
import step1 from '../../../src/assets/step1.png'
import step2 from '../../../src/assets/step2.png'
import step3 from '../../../src/assets/step3.png'
import step4 from '../../../src/assets/step4.png'
import step5 from '../../../src/assets/step5.png'
import './HowItWorks.scss';
import '../../style/style.scss';
import HowItWorksCard from '../howItWorksCard/HowItWorksCard'
import { useTranslation } from 'react-i18next'

const cardData = [
    {stepId:1, stepText: 'howItWorks.step1', stepImg: step1, stepAlt:'Integration img'},
    {stepId:2, stepText: 'howItWorks.step2', stepImg: step2, stepAlt:'Selects payment img'},
    {stepId:3, stepText: 'howItWorks.step3', stepImg: step3, stepAlt:'chooses the partner and send img'},
    {stepId:4, stepText: 'howItWorks.step4', stepImg: step4, stepAlt:'payment img'},
    {stepId:5, stepText: 'howItWorks.step5', stepImg: step5, stepAlt:'completion of transactions img'}
]

function HowItWorks({setRef}) {
    const HowItWorksRef = useRef(null);
    const { t } = useTranslation()

    useEffect(()=>{
        if(HowItWorksRef.current){
            setRef(HowItWorksRef)
        }
        return () => {
            HowItWorksRef.current = null;// очистка рефа после размонтирования
        };
    },[])

    return(
        <section ref={HowItWorksRef} id={2} className="how-it-works">
            <img className="union-circles-pic" src={unionCirclesPic} alt="union circles picture" />
            <div className="text-header">
                <div  className="blue-text">{t('howItWorks.blueText')}</div>  
                <h2>{t('howItWorks.h2')}</h2>
            </div>
            <div className="grid-wrapper">
                {cardData.map(card =>{
                    const {stepImg, stepText, stepId, stepAlt} = card;
                     return(
                        <HowItWorksCard 
                            stepImg={stepImg} 
                            stepText={t(stepText)} 
                            stepId={`item${stepId}`} 
                            stepAlt = {stepAlt} 
                            stepKey={stepId}
                            key={stepId}
                        />
                     )   
                })
                }
            </div>
        </section>
    )
}
  
export default HowItWorks;