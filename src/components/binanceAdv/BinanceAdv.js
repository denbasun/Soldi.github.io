import binanceLogo from '../../../src/assets/Binance_logo_1.png'
import './BinanceAdv.scss';

function BinanceAdv() {
    return(
        <section className="binance-wrapper">
            <img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" />
            <img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" />
            <img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" />
            <img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" />
            <img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" />
        </section>
    )
}
  
  export default BinanceAdv;