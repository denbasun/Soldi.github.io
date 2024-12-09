
import Form from '../form/Form'
import FormDone from '../formDone/FormDone'
import './Modal.scss';
import {memo, useState, useEffect} from 'react';
const Modal = memo(({isOpen, handleClick})=>{
    console.log('Modal render')
    const [clickClose, setClickClose] = useState(false);

    useEffect(()=>{
        setClickClose(false)
    },[clickClose])

    const onHandleClick = (e)=>{
        handleClick(e)
        setClickClose(true)
        console.log('cklickCLose')
    }

    return(
        <div onClick={(e)=> e.target == e.currentTarget ? onHandleClick(e): null} className={isOpen ?'modal-overlay' : 'modal-off'}>
            <div className="modal">
                <div onClick={(e)=>onHandleClick(e)} className="modal-close">
                    &times;
                </div>
                <Form handleClick={handleClick}  clickClose={clickClose}/>

                
            </div>
        </div>
    )
})

export default Modal