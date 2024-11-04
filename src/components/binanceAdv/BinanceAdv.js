import binanceLogo from '../../../src/assets/Binance_logo_1.png'
import './BinanceAdv.scss';

function BinanceAdv() {
    return(
        <div className="binanceWrapper">
            <img className="binanceAdvLogo" src={binanceLogo} alt="binanceLogo" />
            <img className="binanceAdvLogo" src={binanceLogo} alt="binanceLogo" />
            <img className="binanceAdvLogo" src={binanceLogo} alt="binanceLogo" />
            <img className="binanceAdvLogo" src={binanceLogo} alt="binanceLogo" />
            <img className="binanceAdvLogo" src={binanceLogo} alt="binanceLogo" />
        </div>
    )
}
  
  export default BinanceAdv;