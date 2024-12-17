
import './Faq.scss';
import '../../style/style.scss';
import unionCirclesPic from '../../../src/assets/Union_circles_2.png'
import FaqCard from '../faqCard/FaqCard';

const faqData = [
    {question:'What is SOLDY?', answer: 'SOLDY is a payment solution that enables businesses to accept fiat payments from clients and seamlessly receive cryptocurrency in their accounts.'},
    {question:'How does SOLDY work?', answer: 'SOLDY acts as a bridge between fiat and crypto transactions. Clients can pay in fiat currency, and the amount is converted to cryptocurrency, which is then credited to your account.'},
    {question:'What payment pairs are available?', answer: 'SOLDY supports a wide range of payment pairs thanks to its network of partners. This ensures flexibility and the ability to cater to various business needs.'},
    {question:'Is liquidity guaranteed?', answer: 'Yes, SOLDY collaborates with multiple partners to maintain the availability of liquidity for transactions.'},
    {question:'How does SOLDY minimize risks?', answer: 'By working with a diverse set of partners, SOLDY achieves effective risk diversification, ensuring reliable and secure transactions.'},
    {question:'Who can use SOLDY?', answer: 'SOLDY is ideal for businesses and individuals looking to accept fiat payments and receive cryptocurrency seamlessly, regardless of their industry.'},
    {question:'Is SOLDY secure?', answer: 'Yes, SOLDY prioritizes the security of transactions by partnering with trusted providers and implementing robust risk management strategies.'},
]

const Faq = () =>{
    console.log("Faq render")
    return(
        <section className="faq">
             <img className="union-circles-pic" src={unionCirclesPic} alt="union circles picture" />
            <div className="faq-wrapper">
                <div className="blue-text">FAQ</div>
                <h2>Wellcome to help center</h2>
            </div>
            <div className="faq-descr">Welcome to our FAQ page! We’ve complied a list of commonly asked<br></br> questions to provide you with quick and informative answers.</div>
            <div className="accordion">
                {faqData.map((data, i) =>{
                    const {question, answer} = data
                    return(
                        <FaqCard key={i} question={question} answer={answer} i = {i}></FaqCard>
                    )
                })}
            </div>
            <div className='stillQuestion'><h2>Still have a question?</h2></div>
            <div className="faq-descr">Write us!</div>
            
        </section>
    )
}

export default Faq;