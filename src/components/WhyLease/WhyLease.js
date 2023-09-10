import './whyLease.css'

import TopDealersIcon from '../../images/why-lease-1.svg';
import DiscounterPricingIcon from '../../images/why-lease-2.svg';
import LowerPaymentsIcon from '../../images/why-lease-3.svg';
import EasyUpgrade from '../../images/why-lease-4.svg';


const WhyLease = () => {
    return ( 
        <div className="why-lease">
        <div className="container">
          <h2 className="section-title">Why Lease with D&M?</h2>
          <ul className="why-lease__list">
            <li className="why-lease__item">
              <img className="why-lease__item-img" src={TopDealersIcon} alt="dealers" />
              <h3 className="why-lease__item-title">Top Dealers</h3>
              <p className="why-lease__item-text">TrueCar Certified Dealers compete for your business by providing
                discounted pricing on in-stock inventory.</p>
            </li>
            <li className="why-lease__item">
              <img className="why-lease__item-img" src={DiscounterPricingIcon} alt="pricing" />
              <h3 className="why-lease__item-title">Discounted Pricing</h3>
              <p className="why-lease__item-text">View local inventory from the comfort of home and get access to guaranteed
                savings on the car of your choice.</p>
            </li>
            <li className="why-lease__item">
              <img className="why-lease__item-img" src={LowerPaymentsIcon} alt="payments" />
              <h3 className="why-lease__item-title">Lower Payments</h3>
              <p className="why-lease__item-text">Get discounted pricing when you shop for a car or truck using TrueCar and
                save on your lease payment.</p>
            </li>
            <li className="why-lease__item">
              <img className="why-lease__item-img" src={EasyUpgrade} alt="upgrade" />
              <h3 className="why-lease__item-title">Easy Upgrade</h3>
              <p className="why-lease__item-text">Easy to upgrade to the newest vehicle model every few years if you would
                like to be modern and comfortable</p>
            </li>
          </ul>
        </div>
      </div>
    );
}
 
export default WhyLease;