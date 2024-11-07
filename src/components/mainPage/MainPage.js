import './MainPage.scss';
import iphoneImg from '../../../src/assets/Main.png'
import '../../style/button.scss';

function MainPage() {
    return (
      <section className="main-page">
            <div className="main-page-wrapper">
              <h1>Your payment solution</h1>
              <button className="button">Contact sales</button>
            </div>
            <img src={iphoneImg} alt="Iphone img" />
      </section>
    );
  }
  
  export default MainPage;
  