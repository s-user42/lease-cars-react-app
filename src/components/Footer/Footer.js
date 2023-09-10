import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <nav className="footer__menu">
                <ul className="footer__menu-list">
                    <p className="footer__menu-title">Products</p>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Used</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">New</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Sell your car</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <p className="footer__menu-title">Resources</p>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Blog</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">FAQ</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Contact us</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <p className="footer__menu-title">Work With TrueCar</p>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Dealers</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Partners</a></li>
                </ul>
                <ul className="footer__menu-list">
                    <p className="footer__menu-title">About</p>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">About us</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Team</a></li>
                    <li className="footer__menu-item"><a href="#" className="footer__menu-link">Careers</a></li>
                </ul>
                </nav>
                <ul className="app">
                <li className="app__item"><a href="#" className="app__item-link"><img className="app__item-img" src="images/appstore.svg"
                        alt="app" /></a></li>
                <li className="app__item"><a href="#" className="app__item-link"><img className="app__item-img"
                        src="images/googleplay.svg" alt="app" /></a></li>
                </ul>
                <div className="footer__copy">
                <p className="footer__copy-text">
                    For questions about the TrueCar Auto Buying Service please call 1-888-878-3227.
                    Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and
                    complete the
                    TrueCar Dealer Certification Program.
                </p>
                <p className="footer__copy-text">
                    TrueCar does not broker, sell, or lease motor vehicles. Unless otherwise noted, all vehicles shown on this
                    website are
                    offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior sale. By accessing
                    this website,
                    you agree to the TrueCar Terms of Service and Privacy Policy.
                </p>
                </div>
                <nav className="copy__nav">
                <ul className="copy__nav-list">
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Terms of Service</a></li>
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Privacy Policy</a></li>
                    <li className="copy__nav-item"><a href="#" className="copy__nav-link">Do Not Sell My Personal Information</a></li>
                </ul>
                </nav>
            </div>
        </div>
    );
}
 
export default Footer;