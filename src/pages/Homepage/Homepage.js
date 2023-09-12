import { Link } from 'react-router-dom';
import './homepage.css';
import Slider from '../../components/Slider/Slider';
import WhyLease from '../../components/WhyLease/WhyLease';
import HowDoes from '../../components/HowDoes/HowDoes';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Important from '../../components/Important/Important';

const Homepage = () => {
    return (  
        <div className="main">
            <section className="top">
                <div className="container">
                    <h1 className="title">Leasing From D&M</h1>
                    <Link to='/new-cars' href="new-cars.html" className="top__link">FIND A CAR</Link>
                </div>
            </section>

            <Slider />
            <WhyLease />
            <HowDoes />
            <VideoPlayer />

            <Important />
        </div>
    );
}
 
export default Homepage;