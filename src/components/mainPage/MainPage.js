import './MainPage.scss';
import iphoneImg from '../../../src/assets/Main.png'
import '../../style/button.scss';

function MainPage() {
    return (
      <div className="mainPage">
            <div className="mainPage_wrapper">
              <h1>Your payment solution</h1>
              <button className="button">Contact sales</button>
            </div>
            <img src={iphoneImg} alt="IphoneImg" />
      </div>
    );
  }
  
  export default MainPage;
  