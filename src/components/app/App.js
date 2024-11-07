// import logo from './logo.svg';
import './App.scss';
import MainPage from '../mainPage/MainPage';
import unionImage from '../../assets/Union.png'
import Header from '../header/Header';
import BinanceAdv from '../binanceAdv/BinanceAdv';
import AboutUs from '../aboutUs/AboutUs';
import HowItWorks from '../howItWorks/HowItWorks';
import Reviews from '../reviews/Reviews';
import Fees from '../fees/Fees';
import HowToStart from '../howToStart/HowToStart';
import Contacts from '../contacts/Contacts';
import '../../style/style.scss';

function App() {
  return (
    <section className="app">
      <div className="container">
        <img src={unionImage} alt="circles" className="container-union-circles"/>
        <Header></Header>
        <hr/>
        <MainPage></MainPage>
        <BinanceAdv></BinanceAdv>
        <AboutUs></AboutUs>
        <HowItWorks></HowItWorks>
        <Reviews></Reviews>
        <Fees></Fees>
        <HowToStart></HowToStart>
        <Contacts></Contacts>
      </div>
    </section>
  );
}

export default App;
