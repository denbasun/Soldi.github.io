import unionCirclesPic from '../../../src/assets/Union_circles.png'
import step1 from '../../../src/assets/step1.png'
import step2 from '../../../src/assets/step2.png'
import step3 from '../../../src/assets/step3.png'
import step4 from '../../../src/assets/step4.png'
import step5 from '../../../src/assets/step5.png'
import './HowItWorks.scss';
import '../../style/style.scss';
import HowItWorksCard from '../howItWorksCard/HowItWorksCard'
const cardData = [
    {stepId:1, stepText:'1. You integrate Soldi\n and get our widget', stepImg: step1, stepAlt:'Integration img'},
    {stepId:2, stepText:'2. User selects payment \n method  and enters his data', stepImg: step2, stepAlt:'Selects payment img'},
    {stepId:3, stepText:'3. Soldi chooses the partner \n for conducting a transaction \n and sends the data to him', stepImg: step3, stepAlt:'chooses the partner and send img'},
    {stepId:4, stepText:'4. Our partner makes the payment and \n notifies Soldi about the results', stepImg: step4, stepAlt:'payment img'},
    {stepId:5, stepText:'5. Soldi sends confirmation of \n completion of transactions to you', stepImg: step5, stepAlt:'completion of transactions img'}
]

function HowItWorks() {
    
    return(
        <section className="how-it-works">
            <img className="union-circles-pic" src={unionCirclesPic} alt="union circles picture" />

            <div className="how-it-works-header">
                <a href="#" className="link-text">HOW IT WORKS</a>  
                <h2>Just 5 steps to get your money</h2>
            </div>
            <div className="grid-wrapper">
                {cardData.map(card =>{
                    const {stepImg, stepText, stepId, stepAlt} = card;
                     return(
                        <HowItWorksCard 
                            stepImg={stepImg} 
                            stepText={stepText.split('\n').map(line => (
                                <div>
                                    {line}
                                    <br/>
                                </div>
                            ))} 
                            stepId={`item${stepId}`} 
                            stepAlt = {stepAlt} 
                            stepKey={stepId}
                        />
                     )   
                })
                }
        
            </div>
           
        </section>
        

    )
}
  
  export default HowItWorks;