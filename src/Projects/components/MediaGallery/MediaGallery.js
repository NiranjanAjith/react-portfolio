import React from 'react';
import './MediaGallery.css';

const MediaGallery = ({ media }) => {
    return (
        <section className="media-gallery">
            <h2>Screenshots & Media</h2>
            <div className="media-container">
                {media.map((item, index) => (
                    <div key={index} className="media-item">
                        {item.type === 'image' ? (
                            <img src={item.url} alt={item.caption} />
                        ) : (
                            <video src={item.url} controls>
                                Your browser does not support the video tag.
                            </video>
                        )}
                        <p>{item.caption}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaGallery;