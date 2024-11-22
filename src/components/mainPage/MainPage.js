import './MainPage.scss';
import iphoneImg from '../../../src/assets/Main.png'
import '../../style/button.scss';
import { useRef, useEffect, useState, useCallback } from 'react';
import Modal from '../modal/Modal';
import Portal from '../portal/Portal';

function MainPage({setRef}) {
	console.log('MainPage render')
	const [modalOpen, setModalOpen] = useState(false)
	const  mainPageRef = useRef(null);
	
    useEffect(()=>{
        if(mainPageRef.current){
            setRef(mainPageRef)
        }
		
        return () => {
            mainPageRef.current = null;// очистка рефа после размонтирования
        };
		
    },[])

	const handleClick = (e)=>{
		const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
		setModalOpen((onClick) => !onClick)
		if (modalOpen) {  
            document.body.style.overflow = '';
			document.body.style.paddingRight = '0';
        } else {
			document.body.style.overflow = 'hidden'; 
			document.body.style.paddingRight = `${scrollWidth}px`;
        }
	}

	return (
		<section ref={ mainPageRef} id={0} className="main-page">
			<div className="main-page-wrapper">
			<h1>Your payment solution</h1>
			<button onClick={(e)=>handleClick(e)} className="button">Contact sales</button>
			</div>
			<img src={iphoneImg} alt="Iphone img" />
			<Portal>
				<Modal isOpen={modalOpen} handleClick = {handleClick}></Modal>
			</Portal>
		</section>

	);
}

export default MainPage;

