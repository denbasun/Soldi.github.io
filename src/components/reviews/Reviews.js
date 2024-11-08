
import userImg1 from '../../../src/assets/users_images/user1.png';
import userImg2 from '../../../src/assets/users_images/user2.png';
import userImg3 from '../../../src/assets/users_images/user3.png';
import userImg4 from '../../../src/assets/users_images/user4.png';

import './Reviews.scss';
import '../../style/style.scss';
import ReviewCard from '../reviewCard/ReviewCard'



const reviewsData = [
    {img: userImg1, name: 'Din Johnson', text:'I have been using Solidi 3 for my business for several months now. It is an excellent payment system with fast transactions and an easy-to-use interface. Everything works smoothly, and support is always available. Highly recommended!', mark: 5, PaymentMethod: "MasterCard", data: 'March 23, 2023'},
    {img: userImg2, name: 'John Carter', text:'I am very satisfied with Solidi 3. All transactions are quick, and the interface is very intuitive. I have not encountered any issues so far. It is a great system for regular payments!', mark: 5, PaymentMethod: "Visa", data: 'December 1, 2024'},
    {img: userImg3, name: 'John Carter', text:'Solidi 3 is exactly what I need to streamline my financial transactions. Payments are processed instantly, and I feel secure using it. I would definitely recommend this system to anyone who values time and security.', mark: 5, PaymentMethod: "MasterCard", data: 'April 09, 2024'},
    {img: userImg4, name: 'Margot Robbie', text:'Overall, it is a good service. It works reliably, but sometimes there are slight delays in transfers. If this issue gets resolved, I would give it 5 stars. Otherwise, everything is great.', mark: 4, PaymentMethod: "Visa", data: 'September 29, 2024'},
   
]

function Reviews() {
    
    return(
        <section className="reviews">
            <div className="review-info-wrapper">
                <a href="#" className="link-text">Reviews</a>
                <h2>They trust us</h2>
                
            </div>
            <div className="reviews-slider">
                <div className="reviews-card-wrapper">
                    {reviewsData.map((card,i) =>{
                        const {img, text, mark, PaymentMethod, data, name}=card
                        return(
                            <ReviewCard key = {i} userName={name} userImg={img} userText={text} userMark={mark} userPayment={PaymentMethod} data={data}/>
                        )
                    })
                    }
                
                </div>
                <div className="dots">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        
                        
                </div>
            </div>
        </section>
        

    )
}
  
  export default Reviews;