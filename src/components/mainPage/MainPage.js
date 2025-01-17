import './MainPage.scss';
import iphoneImg from '../../../src/assets/Main.png'
import '../../style/button.scss';
import { useRef, useEffect, useState, useCallback } from 'react';
import Modal from '../modal/Modal';
import Portal from '../portal/Portal';
import { useTranslation } from 'react-i18next'

function MainPage({setRef}) {
	const { t } = useTranslation()
	const [modalOpen, setModalOpen] = useState(false)
	const  mainPageRef = useRef(null);

	useEffect(() => {
		if (mainPageRef.current) {
			setRef(mainPageRef);
		}
		return () => {
            mainPageRef.current = null;// очистка рефа после размонтирования
		}	
	}, []);

	const toggleModal = useCallback(() => {
		const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
		if (modalOpen) {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '0';
		} else {
			document.body.style.overflow = 'hidden';
			document.body.style.paddingRight = `${scrollWidth}px`;
		}
		setModalOpen(!modalOpen);
	}, [modalOpen]);

	return (
		<section ref={ mainPageRef} id={0} className="main-page">
			<div className="main-page-wrapper">
			<h1>{t('mainPage.h1')}</h1>
			<button onClick={(e)=>toggleModal(e)} className="button">{t('mainPage.button')}</button>
			</div>
			<img src={iphoneImg} alt="Iphone img" />
			<Portal>
				<Modal isOpen={modalOpen} handleClick = {toggleModal}></Modal>
			</Portal>
		</section>
	);
}

export default MainPage;

