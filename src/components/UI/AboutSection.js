import React from "react";
import '../css/Project1.css';

const AboutSection = ({description, role, technologies}) => {
    return(
<div className="about-section">
    <div className="about-text">
      <h2>About the Project</h2>
      <p>{description}</p>
      <h3>My Role</h3>
      <p>{role}</p>
    </div>
    <div className="technologies">
      <h3>Technologies Used</h3>
      <div className="tech-logos">
        {technologies.map ((image, index) => (
            <div className="technology-card" key={index}>
                <img src={image.url} alt={image.name} className="technology-image" />
                <p className="technology-name">{image.name}</p>
            </div>
        ))}
      </div>
    </div>
  </div>
    );
};

export default AboutSection;