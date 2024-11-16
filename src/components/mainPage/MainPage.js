import './MainPage.scss';
import iphoneImg from '../../../src/assets/Main.png'
import '../../style/button.scss';
import { useRef, useEffect } from 'react';

function MainPage({setRef}) {
  const  mainPageRef = useRef(null);

    useEffect(()=>{
        if(mainPageRef.current){
            setRef(mainPageRef)
        }
        return () => {
            mainPageRef.current = null;// очистка рефа после размонтирования
        };
    },[])

    return (
      <section ref={ mainPageRef} id={0} className="main-page">
            <div className="main-page-wrapper">
              <h1>Your payment solution</h1>
              <button className="button">Contact sales</button>
            </div>
            <img src={iphoneImg} alt="Iphone img" />
      </section>
    );
  }
  
  export default MainPage;
  