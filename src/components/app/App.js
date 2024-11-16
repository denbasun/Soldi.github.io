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
import { useState, useRef, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

function App() {
    console.log('Render App')
    // const [clickedId, setClickedId] = useState(null);
    // const [activeRef, setActiveRef] = useState(0);

    const childRef = useRef([]);

    // Функция получени ref
    const addRef = (ref) => {
        if (ref && !childRef.current.includes(ref)) {
            childRef.current.push(ref);
        }
    };
    // Функция асинхронной отправки реф
    const getRefs = async (ref) => {
        return new Promise((resolve) => {
            resolve(childRef);
        });
    };
   
    return (
        <section  className="app">
            <Header childRefs={getRefs}></Header>
        <div className="container">
            <img src={unionImage} alt="circles" className="container-union-circles"/>
            <MainPage setRef={addRef}></MainPage>
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
