import React, { useEffect } from 'react';
import '../css/Project1.css'
import TitleProject from '../UI/TitleProject';
import GallerySection from '../UI/GallerySection';
import AboutSection from '../UI/AboutSection';
import FeatureSection from '../UI/FeatureSection';
import p2_1 from '../../assets/images/projects/1.png';
import p2_2 from '../../assets/images/projects/2.png';
import p2_3 from '../../assets/images/projects/3.png';
import p2_4 from '../../assets/images/projects/4.png';
import p2_5 from '../../assets/images/projects/5.png';
import p2_6 from '../../assets/images/projects/6.png';
import p2_7 from '../../assets/images/projects/7.png';
import flutter from '../../assets/images/flutter.png';
import nodejs from '../../assets/images/programing.png';
import postgresql from '../../assets/images/postgresql.png';

const technologies = [
  { name: "Flutter", url: flutter },
  { name: "Node.js", url: nodejs },
  { name: "PostgreSQL", url: postgresql },

];

const images = [
  { image: p2_1, alt: "Project Screenshot 1" },
  { image: p2_2, alt: "Project Screenshot 1" },
  { image: p2_3, alt: "Project Screenshot 1" },
  { image: p2_4, alt: "Project Screenshot 1" },
  { image: p2_5, alt: "Project Screenshot 1" },
  { image: p2_6, alt: "Project Screenshot 1" },
  { image: p2_7, alt: "Project Screenshot 1" },

];

const features = [
  "Responsive design for mobile and desktop for administrator." ,
  "Secure payment integration with Stripe." ,
  "Can make their own trips and join for public trips conveniently." ,
  "Can purchase products and services from the venders."
];

const Project2 = () => {
  useEffect(() => {
          // Scroll to the top of the page on route change
          window.scrollTo(0, 0);
        }, );
  return (
    <div className="project-detail">
      <TitleProject title="TravelMate - Travelling Mobile App" motto="Wandering in Sri Lanka"/>

<AboutSection 
  description="This is a travelling mobile application developed for travelling in Sri Lanka.
            The application provides a platform for travellers to book their trips and accommodations.
            The travellers can search for trips and accommodations based on their preferences and book them.
            The application also provides a secure payment gateway for the travellers to make their payments.
            There is an additional feature where the expertised travellers, mainly travel guides can create their own public trips and publish them on the platform, therefore others can join.
            Also, the travel guides can register on the platform and provide their services to the travellers.
            Venders can sell their products and services through the platform which the travellers can purchase."
  role="Full Stack developer"
  technologies={technologies} 
  
/>

<FeatureSection link="https://github.com/TeamTravelmate" features={features} />
<GallerySection images={images}/>

      </div>
  );
};

export default Project2;
