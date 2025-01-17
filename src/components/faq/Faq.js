import './Faq.scss';
import '../../style/style.scss';
import unionCirclesPic from '../../../src/assets/Union_circles_2.png'
import FaqCard from '../faqCard/FaqCard';
import { useTranslation } from 'react-i18next'
const faqData = [
    {question:'faq.question1', answer: 'faq.answer1'},
    {question:'faq.question2', answer: 'faq.answer2'},
    {question:'faq.question3', answer: 'faq.answer3'},
    {question:'faq.question4', answer: 'faq.answer4'},
    {question:'faq.question5', answer: 'faq.answer5'},
    {question:'faq.question6', answer: 'faq.answer6'},
    {question:'faq.question7', answer: 'faq.answer7'},
]

const Faq = () =>{
    const { t } = useTranslation();
    return(
        <section className="faq">
             <img className="union-circles-pic" src={unionCirclesPic} alt="union circles picture" />
            <div className="faq-wrapper">
                <div className="blue-text">{t('faq.blueText')}</div>
                <h2>{t('faq.h2')}</h2>
            </div>
            <div className="faq-descr">{t('faq.descr')}</div>
            <div className="accordion">
                {faqData.map((data, i) =>{
                    const {question, answer} = data
                    return(
                        <FaqCard key={i} question={t(question)} answer={t(answer)} i = {i}></FaqCard>
                    )
                })}
            </div>
            <div className='stillQuestion'><h2>{t('faq.stillQuestion')}</h2></div>
            <div className="faq-descr">{t('faq.writeUs')}</div>
        </section>
    )
}

export default Faq;