import React, { useEffect } from 'react';
import '../css/Project1.css';
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';
import p4_1 from '../../assets/images/projects/11.png';
import java from '../../assets/images/java.png';
import three from '../../assets/images/images.png';
import arcore from '../../assets/images/arcore.webp';

const technologies = [
  { name: "Java", url: java },
  { name: "Three.js", url: three },
  { name: "ARCore", url: arcore },

];

const images = [
  { image: p4_1, alt: "Project Screenshot 1" },
];

const features = [
  "Real-Time Light Detection" ,
  "Dynamic Shadow Rendering" ,
  "Mobile-Friendly Implementation" ,
];

const Project4 = () => {
  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  },);
  return (
    <div className="project-detail">
      <TitleProject title="Illumination of App based AR" motto="Realistic shadows rendering for mobile application"/>

      <AboutSection 
        description="The goal of this research is to create a mobile app-based AR application capable of detecting environmental light direction in real time and applying it to virtual objects to achieve photorealistic rendering.
    Shadows and reflections are key aspects of AR realism, and this study focuses on integrating these features without relying on computationally intensive processes or additional hardware.
    The application utilizes ARCore and Three.js to align virtual objects with real-world lighting conditions dynamically."
        role="Full Stack developer"
        technologies={technologies} 
        
      />

      <FeatureSection link="interlearn" features={features} />
      <GallerySection images={images}/>

      
    </div>
  );
};

export default Project4;
