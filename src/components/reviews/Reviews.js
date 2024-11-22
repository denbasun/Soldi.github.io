import './Reviews.scss';
import '../../style/style.scss';
import ReviewCard from '../reviewCard/ReviewCard'
import { useRef, useEffect, useState, useMemo, useCallback } from 'react';

import reviewsData from '../reviewsData/reviewsData';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../src/assets/users_images', false, /\.png$/));

function Reviews({setRef}) {
    console.log('Review render')
    const reviewsRef = useRef(null);
    const sliderRef = useRef(null);
    const [SliderWidth, setSliderWidth] = useState(0);
    const [offset, setOffset] = useState(0)
    const [clickedDotId, setClickedDotId] = useState(0)
    const slideCardWidth = useMemo(() => Math.round(SliderWidth / 4), [SliderWidth]);
    const fieldWidth = useMemo(() => `${(100 * reviewsData.length) / 4}%`, [reviewsData.length]);
    const activeSlideQuantity = useMemo(() => Math.floor(reviewsData.length / 4), [reviewsData.length]);

    useEffect(()=>{
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.getBoundingClientRect().width);
          }
        if(reviewsRef.current){
            setRef(reviewsRef)
        }
       
        return () => {
            reviewsRef.current = null;// очистка рефа после размонтирования
        };
        
    },[])

    useEffect(()=>{
        setOffset(-SliderWidth*clickedDotId)
    },[clickedDotId])

    const handleSetOffset = useCallback((e) =>{
        if(clickedDotId !== e.target.id){
            setClickedDotId(e.target.id)
        }
    }, [clickedDotId])
    
    const dots = useMemo(() => {
        const dotsArr = [];
        for (let i = 0; i < activeSlideQuantity + 1; i++) {
            dotsArr.push(
                <div
                    onClick={(e) => handleSetOffset(e)}
                    id={i}
                    key={i}
                    className={clickedDotId == i ? "dot active" : "dot"}
                ></div>
            );
        }
        return dotsArr;
    }, [activeSlideQuantity, clickedDotId]);
    
    
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
                                <ReviewCard slideWidth={slideCardWidth} key = {i} userName={name} userImg={images[i]} userText={text} userMark={mark} userPayment={PaymentMethod} data={data}/>
                            )
                        })
                        }
                    </div>
                
                </div>
                <div className="dots">
                        {dots}
                </div>
            </div>
        </section>
        

    )
}
  
  export default Reviews;