import React from "react";
import '../css/Project1.css';

const TitleProject = ({title, motto}) => {
    return(
        <div className="hero-section">
            <h1>{title}</h1>
            <p>{motto}</p> 
        </div>
    );
};

export default TitleProject;