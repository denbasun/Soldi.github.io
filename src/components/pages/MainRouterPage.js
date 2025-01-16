import '../app/App.scss';
import '../mainPage/MainPage.scss';
import MainPage from '../mainPage/MainPage';
import unionImage from '../../assets/Union.png'
import BinanceAdv from '../binanceAdv/BinanceAdv';
import AboutUs from '../aboutUs/AboutUs';
import HowItWorks from '../howItWorks/HowItWorks';
import Reviews from '../reviews/Reviews';
import Fees from '../fees/Fees';
import HowToStart from '../howToStart/HowToStart';
import Contacts from '../contacts/Contacts';

import '../../style/style.scss';
import {useRef, useEffect, useCallback} from 'react';


const MainRouterPage = ({getRefArr})=>{
    console.log('Render MainRouterPage')
    
    const childRef = useRef([]);

    useEffect(() => {
        // Cleanup: сбросить рефы при размонтировании компонента
        return () => {
            childRef.current = [];
        };
      }, []);
    
    const addRef = (ref) => {
       
        if (ref && !childRef.current.includes(ref)) {
            childRef.current.push(ref);
        }
       
    };

    const handleSendData = useCallback(() => {
        getRefArr(childRef.current);
    }, [getRefArr]);

    useEffect(()=>{

        handleSendData()

    },[handleSendData])

    return(
        <>
            <img src={unionImage} alt="circles" className="container-union-circles"/>
            <MainPage setRef={addRef}></MainPage>
            <BinanceAdv></BinanceAdv>
            <AboutUs setRef={addRef}></AboutUs>
            <HowItWorks setRef={addRef}></HowItWorks>
            <HowToStart setRef={addRef}></HowToStart>
            <Fees></Fees>
            <Reviews setRef={addRef}></Reviews>
            <Contacts setRef={addRef}></Contacts>
        </>

    )
}
export default MainRouterPage;