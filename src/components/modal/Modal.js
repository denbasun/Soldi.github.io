
import Form from '../form/Form'
import './Modal.scss';
import {memo} from 'react';
const Modal = memo(({isOpen, handleClick})=>{
    console.log('Modal render')
    return(
        <div onClick={(e)=> e.target == e.currentTarget ? handleClick(e) : null} className={isOpen ?'modal-overlay' : 'modal-off'}>
            <div className="modal">
                <div onClick={(e)=>handleClick(e)} className="modal-close">
                    &times;
                </div>
                <Form/>
            </div>
        </div>
    )
})

export default Modal