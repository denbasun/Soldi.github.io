import { memo, useState, useCallback} from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss';
const Form = memo(() =>{
    console.log('Form render')
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: '',
        userMessage: '',
    });
    
    const [formError, setFormError] = useState({})

    // метод используя emailjs
    // const sendEmail = (e) =>{
    //     e.preventDefault();

    //     emailjs
    //         .sendForm('contact_service', 'contact_form', form.current, {
    //             publicKey: 'A91Xp8zdt-4G85g_g',
    //         })
    //         .then(
    //             ()=>{
    //                 console.log('SUCCESS!');
    //                 form.current.reset()
    //             },
    //             (error) =>{
    //                 console.log("Something went wrong", error.text);
    //                 form.current.reset()
    //             },
    //         );

    // };

//  метод Rest Api без использования SDK emailjs
    const isEmailValid = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const validateForm =() =>{
        let error = {}
        if(formData.userName.length < 2){
            error.userName = 'Name must be at least 2 characters long.'
        }
        if(!isEmailValid(formData.userEmail)){
            error.userEmail = 'Invalid email format.'
        }
        if(formData.userMessage < 1){
            error.userMessage = 'Message cannot be empty.'
        }

        return error
    }

    const onInputChange = useCallback((e)=>{
        
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    },[])

    const sendEmail = (e)=>{
        e.preventDefault()

        const errors = validateForm()
        setFormError(errors)

        if(Object.values(errors).length <1){
            const templateParams = {
                user_name: formData.userName, // Ваше имя
                user_email: formData.userEmail, // Ваш email
                message: formData.userMessage,
            };
    
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    service_id: 'contact_service',
                    template_id: 'contact_form',
                    user_id: 'A91Xp8zdt-4G85g_g',
                    template_params: templateParams,
                }),
               
            }).then(res => {
                console.log('Your mail is sent!');
            }).catch(res => {
                console.log('Oops... ' + JSON.stringify(res));
            }).finally(res =>{
                setFormData({
                    userName: '',
                    userEmail: '',
                    userMessage: '',
                })
                
            })
        }
        
    }
    return (
        <div  className="form-card">
                <h2>Contact us</h2>
                <form  onSubmit={(e) => sendEmail(e)} className={"contact-form"}>
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input onChange={(e) =>onInputChange(e)}  value={formData.userName} type="text" id="name" name="userName"  placeholder="John Smith"/>
                    </div>
                    {formError ? <div className='error'>{formError.userName}</div> : null}
                    <div className="form-group">
                        <label htmlFor="email">Your email <span>*</span></label>
                        <input onChange={(e) =>onInputChange(e)}  value={formData.userEmail} type="email" id="email" name="userEmail"  placeholder="example@gmail.com"/>
                    </div>
                    {formError ? <div className='error'>{formError.userEmail}</div> : null}
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input onChange={(e) =>onInputChange(e)}  value={formData.userMessage}  type="message" id="message" name="userMessage" placeholder="Write here your message."/>
                    </div>
                    {formError ? <div className='error'>{formError.userMessage}</div> : null}
                    <button type="submit" value="Send" className="button button-submit">Send</button>
                    
                </form>
            </div>

    )
})

export default Form