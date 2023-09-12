import './important.css';

import { importantThings } from '../../helper/data';

const Important = () => {
    return (
        <section className="important">
        <div className="container">
          <h2 className="section-title important-title">Important Things to Consider</h2>
          <p className="important__text">
            Depending on your circumstances and what is important to you, a lease could be a great option for your next
            vehicle.
            Below are some important factors that may influence your decision.
          </p>
          <ul className="important__list">
            
            {importantThings.map((item, id) => {
                return (
                    <li className="important__item">
                        <img src={item.img} alt="" className="important__item-img" />
                        <p className="important__item-text">
                            {item.description}
                        </p>
                    </li>
                )
            })}
          </ul>
        </div>
      </section>
    );
}
 
export default Important;