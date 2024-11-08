import star from '../../../src/assets/star.svg'
import './ReviewCard.scss'
function ReviewCard(props){
    const {userImg, userName ,userText, userMark, userPayment, data} = props;
    let starArr = []
    for(let i = 0; i<userMark; i++){
        starArr.push(<img src={star} alt="star" key={i}/>)
    }
    
    return(
        <div className="review-card">
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
}

export default ReviewCard ;  