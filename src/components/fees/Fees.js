import './Fees.scss';
const svgLine = <svg width="2" height="110" viewBox="0 0 2 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M1 1L1 109" stroke="url(#paint0_radial_0_1168)" stroke-linecap="round" />
<defs>
  <radialGradient id="paint0_radial_0_1168" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1 51.2759) rotate(-90) scale(50.2759 3523.5)">
    <stop stop-color="#949DA8" />
    <stop offset="1" stop-color="#949DA8" stop-opacity="0" />
  </radialGradient>
</defs>
</svg>

function Fees() {
    return (
      <section className="fees">
          <div className="fees-card">
                <div className="visa-mastercard">
                    <div className="percentage">7%</div>
                    <div className="percentage-name">VISA/MasterCard</div>
                </div>
                {svgLine}
                <div className="p2p">
                    <div className="percentage">6%</div>
                    <div className="percentage-name">P2P</div>
                </div>
                {svgLine}
                <div className="eps">
                    <div className="percentage">6%</div>
                    <div className="percentage-name">EPS</div>
                </div>
                {svgLine}
                <div className="payment-methods">
                    <div className="percentage">20+</div>
                    <div className="percentage-name">Payment methods</div>
                </div>
          </div>
      </section>
    );
  }
  
export default Fees;
  