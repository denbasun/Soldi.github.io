import { memo, useRef} from 'react';
import emailjs from '@emailjs/browser';

import './Form.scss';
const Form = memo(() =>{
    console.log('Form render')
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'contact_form', form.current, {
                publicKey: 'A91Xp8zdt-4G85g_g',
            })
            .then(
                ()=>{
                    console.log('SUCCESS!');
                    form.current.reset()
                },
                (error) =>{
                    console.log("Something went wrong", error.text);
                    form.current.reset()
                },
            );

    };

    return (
        <div  className="form-card">
                <h2>Contact us</h2>
                <form ref={form} onSubmit={(e)=>sendEmail(e)} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="user_name" required placeholder="John Smith"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your email <span>*</span></label>
                        <input type="email" id="email" name="user_email" required placeholder="example@gmail.com"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="message" id="message" name="message" required placeholder="Write here your message."/>
                    </div>
                  
                    <button type="submit" value="Send" className="button button-submit">Send</button>
                </form>
            </div>

    )
})

export default Form