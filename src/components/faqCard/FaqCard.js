import {useState} from 'react';
import './FaqCard.scss';
import '../../style/style.scss';

const svgArrowTop = <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6L6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
const svgArrowBottom = <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

const FaqCard = ({i, question, answer}) =>{
    const [active, setActive] = useState(false)
    const hendleClick = (e)=>{
        setActive((active) => !active)
    }

    return (
        <div onClick={(e) => hendleClick(e)} key={i} id={i}className={ active? "faq-card active": "faq-card"}>
            <div className="faq-card-wrapper">
                <div className={active ? "faq-card-header activeHeader" : "faq-card-header"}>{question}</div>
                <div className="arrowBottom">{active ? svgArrowTop : svgArrowBottom}</div>
            </div>
            <div className="faq-card-descr">{answer}</div>
        </div>
    )
}

export default FaqCard