import './carCard.css';

const CarCard = ({carInfo}) => {

    const {img, name, price, priceMounthly} = carInfo;

    return (
        <div className="card">
            <img className="card__img" src={img} alt="car" />
            <div className="card__content">
                <h4 className="card__title">{name}</h4>
                <p className="card__text">starting from $ {price}</p>
                <p className="card__price">${priceMounthly}/mo</p>
            </div>
            <a href="#" className="card__link">see details</a>
        </div>
    );
}
 
export default CarCard;