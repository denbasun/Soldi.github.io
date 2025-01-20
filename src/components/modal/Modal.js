import Form from '../form/Form'
import './Modal.scss';
import {memo} from 'react';
const Modal = memo(({isOpen, handleClick})=>{
    return(
        <div onClick={(e)=> e.target == e.currentTarget ?  handleClick(e): null} className={isOpen ?'modal-overlay' : 'modal-overlay-off'}>
            <div className="modal">
                <div onClick={(e)=>handleClick(e)} className="modal-close">
                    &times;
                </div>
                <Form handleClick={handleClick}  isOpen={isOpen}/>
            </div>
        </div>
    )
})

export default Modal