import './videoPlayer.css';
import { youtubeVideo } from '../../helper/data';

const VideoPlayer = () => {
    return (
        <div className="video">
            <div className="container">
                <h2 className="section-title video-title">WELCOME TO D&M LEASING</h2>
                <p className="video__text">
                    Find out how easy it is to lease from D&M
                </p>
                <iframe className="video__content" width="1000" height="500"
                    src={youtubeVideo} title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}
 
export default VideoPlayer;