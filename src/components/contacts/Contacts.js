import '../../style/style.scss';
import './Contacts.scss';
import '../../style/button.scss';
import unionImage from '../../assets/Union.png'
import telegram from '../../../src/assets/telegram.png'
import gmail from '../../../src/assets/mail.png'
function Contacts() {
    return (
    <section className="contacts">
        <div className="contacts-wrapper">

            <div className="contact-card">
                <img className="contact-union-circles" src={unionImage} alt="circles"  />
                    <div className="socialmedia-wrapper">
                        <a className="gmail-logo" href="#">
                            <img  src={gmail} alt="gmail logo"  />
                            <div className="social-media-text">soldi@gmail.com</div>
                        </a>
                        <a className="telegram-logo" href="#">
                            <img  src={telegram} alt="telegram logo"  />
                            <div className="social-media-text">@soldi</div>
                        </a>
                    
                    </div>
            </div>

            <div className="form-card">
                <h2>Contact us</h2>
                <form class="contact-form">
                    <div class="form-group">
                        <label forHtml="name">Your name</label>
                        <input type="text" id="name" name="name" required placeholder="John Smith"/>
                    </div>

                    <div class="form-group">
                        <label forHtml="email">Your email <span>*</span></label>
                        <input type="email" id="email" name="email" required placeholder="example@gmail.com"/>
                    </div>

                    <div class="form-group">
                        <label forHtml="message">Message</label>
                        <input type="message" id="message" name="message" required placeholder="Write here your message."/>
                    </div>

                    <button type="submit" class="button button-submit">Send</button>
                </form>
            </div>

        </div>
        <hr/>
        <div className="footer_text">© Soldi. All rights reserved.</div>
    </section>
    );
  }
  
  export default Contacts;
  