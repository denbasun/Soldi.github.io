import binanceLogo from '../../../src/assets/Binance_logo_1.png'
import './BinanceAdv.scss';

function BinanceAdv() {
    let binanceArr = [];
    for(let i=0; i <= 4 ; i++){
        binanceArr.push(<img className="binance-adv-logo" src={binanceLogo} alt="binance Logo" key={i}/>)
    }

    return(
        <section className="binance-wrapper">
            {binanceArr}
        </section>
    )
}
  
export default BinanceAdv;