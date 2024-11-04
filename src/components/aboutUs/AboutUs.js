import aboutUsPic from '../../../src/assets/aboutUsPic.png'
import './AboutUs.scss';
import '../../style/style.scss';

function AboutUs() {
    return(
        <div className="aboutUs">
            <div className="aboutInfoWrapper">
                <a href="#" className="linkText">About Us</a>
                
                <h2>Your payment solution</h2>
                <div className="aboutDescr">SOLDY is a payment solution that allows you to accept fiat from clients and receive crypto into your account.<br></br>
                <br></br>
We bring together a large number of partners, which allows us to ensure a variety of payment pairs, the availability of liquidity, and the diversification of risks.</div>
            </div>
            <img className="aboutUsPic" src={aboutUsPic} alt="about_Us_Picture" />
        </div>
    )
}
  
  export default AboutUs;