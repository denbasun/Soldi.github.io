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
import { useState, useRef, useEffect } from 'react';

function App() {
  const [childRef, setChildRef] = useState([]);
  const [clickedId, setClickedId] = useState(null);
  
  const addRef = (ref) => {
    setChildRef((prevRefs) => [...prevRefs, ref]);
  };

  useEffect(()=>{
    
    if(childRef){
      childRef.forEach((item,i)=>{
        // console.log(clickedId)
        if(i == 4){
          i=5;
        }
        if(clickedId == i) {
          console.log(i)
          console.log(item)
          const offset = 100; // Отступ для нашей фиксированного nav меню
          const elementPosition = item.current.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
  
          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
        }
        if(clickedId == 4){
          console.log('no ref')
        }
      })
    }
   
    
    
  },[childRef, clickedId])
  

  return (
    <section  className="app">
      <Header getId={setClickedId}></Header>
      <div className="container">
        <img src={unionImage} alt="circles" className="container-union-circles"/>
        <MainPage></MainPage>
        <BinanceAdv></BinanceAdv>
        <AboutUs setRef={addRef}></AboutUs>
        <HowItWorks setRef={addRef}></HowItWorks>
        <HowToStart setRef={addRef}></HowToStart>
        <Fees></Fees>
        <Reviews setRef={addRef}></Reviews>
        <Contacts setRef={addRef}></Contacts>
      </div>
    </section>
  );
}

export default App;
