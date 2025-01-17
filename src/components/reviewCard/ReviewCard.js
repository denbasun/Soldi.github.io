import star from '../../../src/assets/star.svg'
import './ReviewCard.scss'
import {memo} from 'react';
const ReviewCard = memo((props) =>{
    const {userImg, userName ,userText, userMark, userPayment, data, slideWidth} = props;
    let starArr = []
    for(let i = 0; i<userMark; i++){
        starArr.push(<img src={star} alt="star" key={i}/>)
    }

    return(
        <div style={{
                width: slideWidth+'px'}}
            className="review-card">
            <div className="user-header">
                <img className ="user-img" src={userImg} alt="user image" />
                <div className="user-info">
                    <div className="name">{userName}</div>
                    <div className="mark">
                        {starArr}
                    </div>
                </div>
            </div>
        <div className="review-text">
            {userText}
        </div>
        <div className="card-footer">
            {userPayment} | {data}
        </div>
    </div>
    )
})

export default ReviewCard ;  