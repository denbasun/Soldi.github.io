import { memo} from 'react';
import './Form.scss';
const Form = memo(() =>{
    console.log('Form render')
    return (
        <div className="form-card">
                <h2>Contact us</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your name</label>
                        <input type="text" id="name" name="name" required placeholder="John Smith"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your email <span>*</span></label>
                        <input type="email" id="email" name="email" required placeholder="example@gmail.com"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <input type="message" id="message" name="message" required placeholder="Write here your message."/>
                    </div>

                    <button type="submit" className="button button-submit">Send</button>
                </form>
            </div>

    )
})

export default Form