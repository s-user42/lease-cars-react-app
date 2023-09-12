import './leaseVsBuy.css';
import plusIcon from '../../images/plus-icon-2048x2048-z6v59bd6.png';
import minusIcon from '../../images/minus-sign-icon-free-png.png';

const LeaseVsBuy = () => {
    return (
        <div className="comparation">
            <div className="container">
                <h2 className="section-title">LEASE VS BUY</h2>
                <div className="comparation-meths">
                    <div className="comparation-meths--buy">
                        <h3 className='meths'>BUY</h3>
                        <ul className='desc adv-buy'>

                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>Ownership:</span> Purchasing a car means you become its full owner. You can make modifications, decorate it, or sell it at your discretion.</p>
                            </li>

                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>Long-term Savings:</span> After buying a car, you no longer have to make monthly lease payments, reducing your long-term expenses.</p>
                            </li>
                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>Limited Usage Restrictions:</span> Car owners can use their vehicles freely without mileage or wear-and-tear restrictions.</p>
                            </li>
                        </ul>
                        <ul className='desc disadv-buy'>
                            <li>
                                <img src={minusIcon} alt="advantages-icon" />
                                <p><span>High Initial Costs:</span> Buying a car requires substantial financial investments, including the cost of the vehicle itself, insurance, and taxes.</p>
                            </li>

                            <li>
                                <img src={minusIcon} alt="advantages-icon" />
                                <p><span>Depreciation:</span> Over time, the car's value decreases, and you may lose money when selling it.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="comparation-meths--lease">
                        <h3 className='meths'>LEASE</h3>
                        <ul className='desc adv-lease'>
                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>Lower Monthly Payments:</span> Leasing offers lower monthly payments compared to financing a car purchase.</p></li>
                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>New Vehicles:</span> When you lease, you can always drive the latest models with modern features and technologies.</p></li>
                            <li>
                                <img src={plusIcon} alt="advantages-icon" />
                                <p><span>Fewer Worries About Repairs:</span> In most cases, routine maintenance and warranty work are covered in a lease.</p></li>
                        </ul>
                        <ul className='desc disadv-lease'>
                            <li>
                                <img src={minusIcon} alt="advantages-icon" />
                                <p><span>Usage Restrictions:</span> Lease agreements may impose restrictions on mileage and wear-and-tear, potentially leading to additional costs.</p>
                            </li>
                            <li>
                                <img src={minusIcon} alt="advantages-icon" />
                                <p><span>Lack of Ownership:</span> At the end of the lease term, you don't own the car, and you may end up without a vehicle unless you renew the lease or choose a new one.</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default LeaseVsBuy;