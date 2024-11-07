import star from '../../../src/assets/star.svg'
import userImg from '../../../src/assets/user.png'
import './Reviews.scss';
import '../../style/style.scss';

function Reviews() {
    
    return(
        <section className="reviews">
            <div className="review-info-wrapper">
                <a href="#" className="link-text">Reviews</a>
                <h2>They trust us</h2>
            </div>
            <div className="reviews-slider">
                <div className="reviews-card-wrapper">
                    <div className="review-item">
                        <div className="user-header">
                            <img src={userImg} alt="user image" />
                            <div className="user-info">
                                <div className="name">Floyd Miles</div>
                                <div className="mark">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="review-text">
                            Lorem ipsum dolor sit amet consectetur. Hac imperdiet sapien congue diam fermentum urna dolor platea mattis. 
                            In pretium porttitor neque quis faucibus sed massa fames tincidunt. 
                            Fermentum aliquet facilisi ligula pellentesque.
                        </div>
                        <div className="card-footer">
                            MasterCard | March 23, 2023
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="user-header">
                            <img src={userImg} alt="user image" />
                            <div className="user-info">
                                <div className="name">Floyd Miles</div>
                                <div className="mark">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="review-text">
                            Lorem ipsum dolor sit amet consectetur. Hac imperdiet sapien congue diam fermentum urna dolor platea mattis. 
                            In pretium porttitor neque quis faucibus sed massa fames tincidunt. 
                            Fermentum aliquet facilisi ligula pellentesque.
                        </div>
                        <div className="card-footer">
                            MasterCard | March 23, 2023
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="user-header">
                            <img src={userImg} alt="user image" />
                            <div className="user-info">
                                <div className="name">Floyd Miles</div>
                                <div className="mark">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="review-text">
                            Lorem ipsum dolor sit amet consectetur. Hac imperdiet sapien congue diam fermentum urna dolor platea mattis. 
                            In pretium porttitor neque quis faucibus sed massa fames tincidunt. 
                            Fermentum aliquet facilisi ligula pellentesque.
                        </div>
                        <div className="card-footer">
                            MasterCard | March 23, 2023
                        </div>
                    </div>
                    <div className="review-item">
                        <div className="user-header">
                            <img src={userImg} alt="user image" />
                            <div className="user-info">
                                <div className="name">Floyd Miles</div>
                                <div className="mark">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                            </div>
                            
                        </div>
                        <div className="review-text">
                            Lorem ipsum dolor sit amet consectetur. Hac imperdiet sapien congue diam fermentum urna dolor platea mattis. 
                            In pretium porttitor neque quis faucibus sed massa fames tincidunt. 
                            Fermentum aliquet facilisi ligula pellentesque.
                        </div>
                        <div className="card-footer">
                            MasterCard | March 23, 2023
                        </div>
                    </div>
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