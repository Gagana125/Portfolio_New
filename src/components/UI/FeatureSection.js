import React from "react";
import { Link } from "react-router-dom";
import '../css/Project1.css';

const FeatureSection = ({ features, link }) => {
    return (
        <div className="features-section">
            <h3>Key Features</h3>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <Link to={link} className="github-btn">View on GitHub</Link>
        </div>
    );
};

export default FeatureSection;