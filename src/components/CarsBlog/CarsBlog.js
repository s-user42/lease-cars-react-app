import './carsBlog.css';

import { useEffect, useState } from 'react';

import { posts } from '../../helper/blogPosts';

const CarsBlog = () => {

    const [offset, setOffset] = useState(0);
    const [visiblePosts, setVisiblePosts] = useState([]);

    useEffect(() => {
        
        const temp = getVisiblePosts(0);
        setVisiblePosts(temp);
    }, []);

    const getVisiblePosts = (startOffset) => {
        
        const endOffset = startOffset + 2;
        return posts.slice(startOffset, endOffset);
    };

    const showMorePosts = () => {
        const nextOffset = offset + 2;

        if (nextOffset >= posts.length) {
            const temp = getVisiblePosts(0);
            setOffset(0);
            setVisiblePosts(temp);
        } else {
            const temp = getVisiblePosts(nextOffset);
            setOffset(nextOffset);
            setVisiblePosts(temp);
        }
    };

    return (
        <section className="blog">
            <div className="container">
                <div className="blog__items">
                    {visiblePosts.map((item, id) => {
                        return (
                            <div className="blog__item" key={id}>
                                <img className="blog__item-img" src={item.img} alt="blog" />
                                <h4 className="blog__item-title">
                                    {item.description}
                                </h4>
                                <a href="#" className="blog__item-link">more</a>
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={showMorePosts}
                    className="showmore-button">
                    SHOW MORE
                </button>
            </div>
        </section>
    );
}

export default CarsBlog;
