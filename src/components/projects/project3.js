import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';
import p3_1 from '../../assets/images/projects/7.jpg';
import p3_2 from '../../assets/images/projects/8.jpg';
import p3_3 from '../../assets/images/projects/9.jpg';
import p3_4 from '../../assets/images/projects/10.jpg';
import p3_5 from '../../assets/images/projects/10.png';
import mind from '../../assets/images/mind.png';
import aframe from '../../assets/images/aframe.png';
import postgresql from '../../assets/images/postgresql.png';
import react from '../../assets/images/atom.png';
import nodejs from '../../assets/images/programing.png';

const technologies = [
  { name: "React.js", url: react },
  { name: "Node.js", url: nodejs },
  { name: "Mind AR", url: mind },
  { name: "AFrame", url: aframe },
  { name: "PostgreSQL", url: postgresql },

];

const images = [
  { image: p3_1, alt: "Project Screenshot 1" },
  { image: p3_2, alt: "Project Screenshot 1" },
  { image: p3_3, alt: "Project Screenshot 1" },
  { image: p3_4, alt: "Project Screenshot 1" },
  { image: p3_5, alt: "Project Screenshot 1" },

];

const features = [
  "Interactive 3D Model Customization",
  "Dynamic Target-Content Mapping",
  "User-Friendly CMS Interface",
  "Responsive and Scalable Design",
  "Real-Time Synchronization"
];

const Project3 = () => {
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  },);
  return (
    <div className="project-detail">
      <TitleProject title="Content Management System - Web AR" motto="Where contents and targets meet" />

      <GallerySection images={images} />

      <AboutSection
        description="This project is an innovative AR-based CMS that empowers users to define dynamic interactions for 3D models within an AR scene. By leveraging AR technologies, the system bridges creativity and functionality, offering a seamless interface for non-technical users to create engaging AR experiences.
            The platform allows users to:
            Interact with 3D models (e.g., click events) for actions like changing colors, playing media, navigating to links, or resizing models.
            Assign content to specific targets, dynamically rendering them based on user-defined mappings.
            Manage and configure the entire AR experience through a user-friendly CMS interface."
        role="Full Stack developer"
        technologies={technologies}

      />

      <FeatureSection link="https://github.com/Modelling-and-Simulation/CMS" features={features} />

    </div>
  );
};

export default Project3;
