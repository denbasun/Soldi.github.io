import './FormDone.scss';
import {memo} from 'react';
const FormDone = memo(({resOK}) =>{
    return (
        <div  className="form-card-done">
                {resOK? <h2>Thank you for contacting us!<br></br> Our team will respond within 24 hours.</h2> : <h2>Something wrong happened.</h2>}
        </div>
    )
})

export default FormDone