import unionCirclesPic from '../../../src/assets/Union_circles.png'
import step1 from '../../../src/assets/step1.png'
import step2 from '../../../src/assets/step2.png'
import step3 from '../../../src/assets/step3.png'
import step4 from '../../../src/assets/step4.png'
import step5 from '../../../src/assets/step5.png'
import './HowItWorks.scss';
import '../../style/style.scss';

function HowItWorks() {
    
    return(
        <div className="HowItWorks">
            <img className="unionCirclesPic" src={unionCirclesPic} alt="union_Circles_Picture" />

            <div className="howItWorksHeader">
                <a href="#" className="linkText">HOW IT WORKS</a>  
                <h2>Just 5 steps to get your money</h2>
            </div>
            <div className="gridWrapper">
                <div id='item1'className="gridElement">
                    <div className='step'>1. You integrate Soldi<br></br> and get our widget</div>
                    <img src={step1} alt="" />
                </div>
                <div id='item2'className="gridElement">
                    <div className='step'>2.  User selects payment<br></br> method  and enters his data</div>
                    <img src={step2} alt="" />
                </div>
                <div id='item3'className="gridElement">
                    <div className='step'>3. Soldi chooses the partner <br></br>for conducting a transaction<br></br> and sends the data to him</div>
                    <img src={step3} alt="" />
                </div>
                <div id='item4'className="gridElement">
                    <div className='step'>4. Our partner makes the payment and<br></br> notifies Soldi about the results</div>
                    <img src={step4} alt="" />
                </div>
                <div id='item5'className="gridElement">
                    <div className='step'>5. Soldi sends confirmation of<br></br> completion of transactions to you</div>
                    <img src={step5} alt="" />
                </div>
            </div>
           
        </div>
        

    )
}
  
  export default HowItWorks;