import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import AboutSection from '../UI/AboutSection';
import GallerySection from '../UI/GallerySection';
import FeatureSection from '../UI/FeatureSection';
import p1_1 from '../../assets/images/projects/1.jpg';
import p1_2 from '../../assets/images/projects/2.jpg';
import p1_3 from '../../assets/images/projects/3.jpg';
import p1_4 from '../../assets/images/projects/4.jpg';
import p1_5 from '../../assets/images/projects/5.jpg';
import p1_6 from '../../assets/images/projects/6.jpg';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css-3.png';
import js from '../../assets/images/js.png';
import mysql from '../../assets/images/mysql.png';
import php from '../../assets/images/php.png';


const technologies = [
    { name: "HTML", url: html },
    { name: "CSS", url: css },
    { name: "JavaScript", url: js },
    { name: "MySQL", url: mysql },
    { name: "PHP", url: php },
  
  ];
  
  // const images = [
  //   { image: "/assets/projects/1.jpg", alt: "Project Screenshot 1" },
  //   { image: "/assets/projects/2.jpg", alt: "Project Screenshot 1" },
  //   { image: "/assets/projects/3.jpg", alt: "Project Screenshot 1" },
  //   { image: "/assets/projects/4.jpg", alt: "Project Screenshot 1" },
  //   { image: "/assets/projects/5.jpg", alt: "Project Screenshot 1" },
  //   { image: "/assets/projects/6.jpg", alt: "Project Screenshot 1" },
  // ];

  const images = [
    { image: p1_1, alt: "Project Screenshot 1" },
    { image: p1_2, alt: "Project Screenshot 1" },
    { image: p1_3, alt: "Project Screenshot 1" },
    { image: p1_4, alt: "Project Screenshot 1" },
    { image: p1_5, alt: "Project Screenshot 1" },
    { image: p1_6, alt: "Project Screenshot 1" },
  ];
  
  const features = [
    "Upload and download teaching materials." ,
    "Check the availability and reserve slots for classes." ,
    "Enrollments and payment for classes." ,
  ];

const Project1 = () => {
    useEffect(() => {
        // Scroll to the top of the page on route change
        window.scrollTo(0, 0);
      }, );
    return (
        <div className="project-detail">
        <TitleProject title="Interlearn - Institute Management System" motto="Make the move for a better life with us"/>
        {/* <img src={p1_1}></img> */}

        <GallerySection images={images}/>

        <AboutSection 
            description="This is an institute management system where students can enroll in courses, and make payments online.
            And also the teachers can reserve an available slot for their classes and upload the teaching materials for the relevant class.
            The students can view the uploaded materials and download them."
            role="Group leader and Full Stack developer"
            technologies={technologies}
        />

        <FeatureSection link="https://github.com/Dhatchaya/Interlearn-" features={features} />
        </div>

       
    );
};

export default Project1;
