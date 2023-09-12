import { useState } from 'react';
import './carCard.css';

import PopupCard from '../PopupCard/PopupCard';

const CarCard = ({carInfo}) => {

    const {img, name, price, priceMounthly} = carInfo;
    const [onPopup, setOnPopup] = useState(false);

    const togglePopupCard = () => {
        setOnPopup(!onPopup);
        if (!onPopup) document.documentElement.style.overflow = 'hidden';
    }

    return (
        <>
        <div className="card" onClick={togglePopupCard}>
            <img className="card__img" src={img} alt="car" />
            <div className="card__content">
                <h4 className="card__title">{name}</h4>
                <p className="card__text">starting from $ {price}</p>
                <p className="card__price">${priceMounthly}/mo</p>
            </div>
            <a className="card__link">see details</a>
        </div>
        {onPopup ? <PopupCard togglePopupCard={togglePopupCard} carInfo={carInfo}/> : null}
        </>
    );
}
 
export default CarCard;
