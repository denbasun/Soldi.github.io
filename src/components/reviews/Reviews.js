

import userImg1 from '../../../src/assets/users_images/user1.png';
import userImg2 from '../../../src/assets/users_images/user2.png';
import userImg3 from '../../../src/assets/users_images/user3.png';
import userImg4 from '../../../src/assets/users_images/user4.png';
import userImg5 from '../../../src/assets/users_images/user5.png';
import userImg6 from '../../../src/assets/users_images/user6.png';
import userImg7 from '../../../src/assets/users_images/user7.png';
import userImg8 from '../../../src/assets/users_images/user8.png';
import userImg9 from '../../../src/assets/users_images/user9.png';


import './Reviews.scss';
import '../../style/style.scss';
import ReviewCard from '../reviewCard/ReviewCard'
import { useRef, useEffect, useState } from 'react';


const reviewsData = [
    {img: userImg1, name: 'Din Johnson', text:'I have been using Solidi 3 for my business for several months now. It is an excellent payment system with fast transactions and an easy-to-use interface. Everything works smoothly, and support is always available. Highly recommended!', mark: 5, PaymentMethod: "MasterCard", data: 'March 23, 2023'},
    {img: userImg2, name: 'John Carter', text:'I am very satisfied with Solidi 3. All transactions are quick, and the interface is very intuitive. I have not encountered any issues so far. It is a great system for regular payments!', mark: 5, PaymentMethod: "Visa", data: 'December 1, 2024'},
    {img: userImg3, name: 'Dean Carrager', text:'Solidi 3 is exactly what I need to streamline my financial transactions. Payments are processed instantly, and I feel secure using it. I would definitely recommend this system to anyone who values time and security.', mark: 5, PaymentMethod: "MasterCard", data: 'April 09, 2024'},
    {img: userImg4, name: 'Margot Robbie', text:'Overall, it is a good service. It works reliably, but sometimes there are slight delays in transfers. If this issue gets resolved, I would give it 5 stars. Otherwise, everything is great.', mark: 4, PaymentMethod: "Visa", data: 'September 29, 2024'},
    {img: userImg5, name: 'Robert Black', text:'Solidi 3 is a fantastic payment system that has made my transactions effortless. The user interface is sleek, and I love how fast the transactions are. I have never had any issues. Highly recommend it!', mark: 5, PaymentMethod: "PayPal", data: 'July 14, 2024'},
    {img: userImg6, name: 'Emily Stone', text:'I’ve been using Solidi 3 for some time now, and it’s great for managing personal and business payments. The platform is secure and straightforward. The occasional minor delay is the only downside, but overall, it’s excellent.', mark: 4, PaymentMethod: "MasterCard", data: 'January 12, 2023'},
    {img: userImg7, name: 'Sophia White', text:'Using Solidi 3 has been an amazing experience. The payment system is quick, reliable, and very secure. I’ve recommended it to all my colleagues. Definitely a must-try for anyone looking for efficiency!', mark: 5, PaymentMethod: "Visa", data: 'May 3, 2024'},
    {img: userImg8, name: ' Green', text:'Solidi 3 is very user-friendly, and the speed of transactions is impressive. I use it daily for my business, and it has never let me down. Great service and excellent support team.', mark: 5, PaymentMethod: "Apple Pay", data: 'October 8, 2024'},
    {img: userImg9, name: 'Olivia Brown', text:'I like Solidi 3 because it’s very intuitive and handles payments securely. It’s a bit pricey compared to other options, but the reliability and speed make up for it. Worth every penny.', mark: 5, PaymentMethod: "PayPal", data: 'November 2, 2023'},
    
]

function Reviews({setRef}) {
    console.log('Review render')
    const reviewsRef = useRef(null);
    const sliderRef = useRef(null);
    const [SliderWidth, setSliderWidth] = useState(0);
    const [offset, setOffset] = useState(0)
    const [clickedDotId, setClickedDotId] = useState(0)
    const slideCardWidth = Math.round(SliderWidth/4)
    const fieldWidth = (100 * reviewsData.length)/4 +"%"; 
    const activeSlideQuantity = Math.floor(((reviewsData.length)/4))

    useEffect(()=>{
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.getBoundingClientRect().width);
          }
        if(reviewsRef.current){
            setRef(reviewsRef)
        }
       
        if(clickedDotId == 0){
            setOffset(0)
        }else{
            setOffset(-SliderWidth*clickedDotId)
        }

        return () => {
            reviewsRef.current = null;// очистка рефа после размонтирования
        };
        
    },[clickedDotId])

    function handleSetOffset(e){
        if(clickedDotId !== e.target.id){
            setClickedDotId(e.target.id)
        }
        
    }
    
    const dotsArr = []
    function getDots(){
        for(let i = 0; i < activeSlideQuantity+1; i++ ){
            dotsArr.push(<div onClick={(e)=>handleSetOffset(e)} id= {i} key={i} className={clickedDotId == i ? "dot active" : 'dot'}></div>) 
        }
    }
    getDots()
   
    
    return(
        <section ref={reviewsRef} id={4} className="reviews">
            <div className="review-info-wrapper">
                <div className="blue-text">Reviews</div>
                <h2>They trust us</h2>
                
            </div>
            <div className="reviews-slider">
                <div ref={sliderRef} className="reviews-card-wrapper">
                    <div style={{width: fieldWidth, transform: `translateX(${offset}px)`}} className="slider-wrapper">
                        {reviewsData.map((card,i) =>{
                            
                            const {img, text, mark, PaymentMethod, data, name}=card
                            return(
                                <ReviewCard slideWidth={slideCardWidth} key = {i} userName={name} userImg={img} userText={text} userMark={mark} userPayment={PaymentMethod} data={data}/>
                            )
                        })
                        }
                    </div>
                
                </div>
                <div className="dots">
                        {dotsArr}
                </div>
            </div>
        </section>
        

    )
}
  
  export default Reviews;