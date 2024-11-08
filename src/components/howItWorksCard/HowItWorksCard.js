import './HowItWorksCard.scss';
function HowItWorksCard({stepImg, stepText, stepId, stepAlt}){
    return(
        <div id={stepId} className="grid-element" >
            <div className='step'>{stepText}</div>
            <img src={stepImg} alt={stepAlt} />
        </div>
    );
}
export default HowItWorksCard;