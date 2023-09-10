import './header.css';

import logo from '../../images/logo.svg';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Header = ({isHomepage}) => {

    const location = useLocation();
    const headerClasses = location.pathname === '/' ? "header header-main" : "header";

    return (
        <>
            <div className={headerClasses}>
                <div className="container">
                    <div className="header__inner">
                        <NavLink to='/' className="logo"><img src={logo} alt="logo" className="logo__img" /></NavLink>
                        <nav className="menu">
                        <button className="menu__btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <ul className="menu__list">
                            <li className="menu__list-item"><NavLink to='/new-cars' className="menu__list-link">NEW CARS</NavLink></li>
                            <li className="menu__list-item"><NavLink href="#" className="menu__list-link">PRE-OWNED CARS</NavLink></li>
                            <li className="menu__list-item"><NavLink href="#" className="menu__list-link">FINANCE</NavLink></li>
                            <li className="menu__list-item"><NavLink href="#" className="menu__list-link">LEASE VS BUY</NavLink></li>
                            <li className="menu__list-item"><NavLink href="contacts.html" className="menu__list-link">CONTACT US</NavLink></li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}
 
export default Header;