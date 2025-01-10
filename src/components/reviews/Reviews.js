import './Reviews.scss';
import '../../style/style.scss';
import ReviewCard from '../reviewCard/ReviewCard'
import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { useSwipeable } from 'react-swipeable';

import reviewsData from '../reviewsData/reviewsData';
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../src/assets/users_images', false, /\.png$/));

function Reviews({setRef}) {
    console.log('Review render')
   
    // const [value, setValue] = useState(() => {
    //     if(window.matchMedia('(max-width: 768px)').matches){
    //         return 1;
    //     }else if (window.matchMedia('(max-width: 992px)').matches) {
    //         return 2;
    //     } else if (window.matchMedia('(max-width: 1200px)').matches) {
    //         return 3;
    //     } else {
    //         return 4;
    //     }
    // });
    const [value, setValue] = useState(getSlideValue);
    const [SliderWidth, setSliderWidth] = useState(0);
    const [offset, setOffset] = useState(0)
    const [clickedDotId, setClickedDotId] = useState(0)

    const reviewsRef = useRef(null);
    const sliderRef = useRef(null);
    
    const slideCardWidth = useMemo(() => Math.round(SliderWidth / value), [SliderWidth, value]);
    const fieldWidth = useMemo(() => `${(100 * reviewsData.length) / value}%`, [reviewsData.length, value]);

    function getSlideValue() {
        const breakpoints = [
            { max: 768, value: 1 },
            { max: 992, value: 2 },
            { max: 1200, value: 3 },
        ];
        const match = breakpoints.find(({ max }) => window.matchMedia(`(max-width: ${max}px)`).matches);
        return match ? match.value : 4;
    }
    
    const updateSizes = useCallback(() => {
        setValue(getSlideValue());
        setClickedDotId(0);
        if (sliderRef.current) {
            setSliderWidth(sliderRef.current.getBoundingClientRect().width);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateSizes);
        updateSizes();
        return () => window.removeEventListener('resize', updateSizes);
    }, [updateSizes]);

    useEffect(()=>{
       
        if(reviewsRef.current){
            setRef(reviewsRef)
        }
       
        return () => {
            reviewsRef.current = null;// очистка рефа после размонтирования
        };
        
    },[])


    useEffect(()=>{
        setOffset(-SliderWidth*clickedDotId)
    },[clickedDotId, SliderWidth])

    const handlers = useSwipeable({
        onSwipedRight: () => {
          setClickedDotId(clickedDotId < dots.length-1 ? clickedDotId+1 : 0); // Вызов вашей функции
        },
        onSwipedLeft: () => {
            setClickedDotId(clickedDotId > 0 ? clickedDotId-1 : dots.length-1); // Вызов вашей функции
        },
        preventDefaultTouchmoveEvent: true,
    });
    
    const dots = useMemo(() => {
        const dotsArr = [];
        for (let i = 0; i < Math.ceil(reviewsData.length/value); i++) {
            dotsArr.push(
                <div
                    onClick={(e) => setClickedDotId(i)}
                    id={i}
                    key={i}
                    className={clickedDotId == i ? "dot active" : "dot"}
                ></div>
            );
        }
        return dotsArr;
    }, [clickedDotId, value]);
    
    
    return(
        <section ref={reviewsRef} id={4} className="reviews">
            <div className="review-info-wrapper">
                <div className="blue-text">Reviews</div>
                <h2>They trust us</h2>
                
            </div>
            <div className="reviews-slider">
                <div ref={sliderRef} className="reviews-card-wrapper">
                    <div {...handlers} className="swipeWrapper">
                        <div  style={{width: fieldWidth, transform: `translateX(${offset}px)`}} className="slider-wrapper">
                            {reviewsData.map((card,i) =>{
                                const {img, text, mark, PaymentMethod, data, name}=card
                                return(
                                    <ReviewCard slideWidth={slideCardWidth} key = {i} userName={name} userImg={images[i]} userText={text} userMark={mark} userPayment={PaymentMethod} data={data}/>
                                )
                            })
                            }
                        </div>
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