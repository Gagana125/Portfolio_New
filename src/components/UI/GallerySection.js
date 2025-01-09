import React from "react";
import '../css/Project1.css';

const GallerySection = ({ images }) => {
    return (
        <div className="gallery-section">
            <h3>Screenshots</h3>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <img src={image.image} alt={image.alt} key={index} />
                ))}
            </div>
        </div>
    );
};

export default GallerySection;