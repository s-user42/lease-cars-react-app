import './popupCard.css';

const PopupCard = ({togglePopupCard, carInfo}) => {

    const enableScroll = (event) => {
        if (event.target.classList.contains('popup-wrapper')) {
            document.documentElement.style.overflow = 'auto';
            togglePopupCard()
        }
    }

    const {img, name, price} = carInfo;

    return (
        <div className="popup-wrapper" onClick={enableScroll}>
            <div className="popup-card">
                <div className="car__info">
                    <img src={img} alt="" />
                    <div className="text">
                        <p className='popup-card__title card__title'>{name}</p>
                        <p className='popup-card__price card__price'>${price}</p>
                    </div>
                </div>


                <div className="car__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicinelit. Quod minus nulla odit deleniti provident totam sequi aliquam necessitatibus, suscipit quis.</p>
                </div>

            </div>
        </div>
    );
}
 
export default PopupCard;