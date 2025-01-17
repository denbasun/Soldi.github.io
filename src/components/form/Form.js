import { memo, useState, useCallback, useEffect} from 'react';
import FormDone from '../formDone/FormDone';
import { useTranslation } from 'react-i18next'
import './Form.scss';
const Form = memo(({isOpen, handleClick}) =>{
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMessage: '',
    });
    const { t } = useTranslation();
    const [formError, setFormError] = useState({})
    const [formDone, setFormDone] = useState(false)
    const [resOK, setResOk] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const isEmailValid = useCallback((email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    },[]);

    const validateForm = useCallback(() =>{
        let error = {}
        if(formData.userName.length < 2){
            error.userName = 'error.errorName'
        }
        if(!isEmailValid(formData.userEmail)){
            error.userEmail = 'error.errorEmail'
        }
        if(formData.userMessage < 1){
            error.userMessage = 'error.errorMessage'
        }
        return error
    },[formData, isEmailValid])

    const onInputChange = useCallback((e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    },[])

    useEffect(()=>{
        if(isOpen){
            setFormDone(false)
        }
    },[isOpen])

    useEffect(() => {
        let timeout;
        if (formDone) {
            timeout = setTimeout(() => {
                setFormDone(false);

                if(handleClick){
                    handleClick()
                }

            }, 3000);
        }
        return () => clearTimeout(timeout); // Очистка таймаута
    }, [formDone, formError]);

    const resetForm = () => {
        setFormData({
          userName: '',
          userEmail: '',
          userMessage: '',
        });
      };
     

    const sendEmail = (e)=>{
        e.preventDefault()
        setDisabled(true)

        const errors = validateForm()
        setFormError(errors)
        
        if(Object.values(errors).length === 0){
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    service_id: 'contact_service',
                    template_id: 'contact_form',
                    user_id: 'A91Xp8zdt-4G85g_g',
                    template_params: {
                        user_name: formData.userName, 
                        user_email: formData.userEmail, 
                        message: formData.userMessage,
                    },
                }),
            }).then(res => {
                    setFormDone(true)
                    setDisabled(false)
                if(res.ok){
                    console.log('Email sent!');
                    setResOk(true)
                }else{
                    console.log('Server error during email sending');
                    setResOk(false)
                    
                }
               
            }).catch(res => {
                console.log('Unexpected error:', res);
                setResOk(false)
                setFormDone(true)
            }).finally(res =>{
                resetForm()
            })
        }
    }
    return (
        <>
            { !formDone ? 
                <div  className="form-card">
                    <h2>{t('formCard.h2')}</h2>
                    <form  onSubmit={(e) => sendEmail(e)} className={"contact-form"}>
                        <div className="form-group">
                            <label htmlFor="name">{t('formCard.name')}</label>
                            <input onChange={(e) =>onInputChange(e)}  value={formData.userName} type="text" id="name" name="userName"  placeholder="John Smith"/>
                            {<div className='error'>{t(formError ? formError.userName : null)}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">{t('formCard.email')} <span>*</span></label>
                            <input onChange={(e) =>onInputChange(e)}  value={formData.userEmail} type="email" id="email" name="userEmail"  placeholder="example@gmail.com"/>
                            {<div className='error'>{t(formError ? formError.userEmail : null)}</div>}
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">{t('formCard.message')}</label>
                            <input onChange={(e) =>onInputChange(e)}  value={formData.userMessage}  type="message" id="message" name="userMessage" placeholder="Write here your message."/>
                            {<div className='error'>{t(formError ? formError.userMessage : null)}</div>}
                        </div>
                        
                        <button type="submit" value="Send" className={ disabled ? "button button-submit_disabled" : "button button-submit" }>{t('formCard.button')}</button>
                        
                    </form>
                </div>
                :<FormDone resOK={resOK}></FormDone>
            }
        </>
    )
})

export default Form