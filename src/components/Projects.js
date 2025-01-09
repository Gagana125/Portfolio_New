import React from 'react';
import Card from './UI/Card';
import p1 from '../assets/images/projects/1.jpg';
import p2 from '../assets/images/projects/1_nw.png';
import p3 from '../assets/images/projects/8.jpg';
import p4 from '../assets/images/projects/11.png';

const projectsData = [
  {
    id: 1,
    // image: '/assets/projects/1.jpg',
    image: p1,
    title: 'Institute Management System',
    description: 'The Institute Management System allows students to enroll in courses, make online payments, and access teaching materials for their classes. Teachers can reserve available class slots and upload relevant materials, which students can view and download.',
    reverse: false, // This determines if image is on the left or right
  },
  {
    id: 2,
    // image: '/assets/projects/1_nw.png',
    image: p2,
    title: 'Travel Mate',
    description: 'The mobile application for traveling in Sri Lanka enables travelers to book trips and accommodations, make secure payments, and search options based on preferences. Travel guides can create and publish public trips, register to offer services, and vendors can sell products and services on the platform.',
    reverse: true,
  },
  {
    id: 3,
    // image: '/assets/projects/8.jpg',
    image: p3,
    title: 'Content Management System - AR',
    description: 'This is a  Content Management System (CMS) for an interactive Augmented Reality (AR) platform, enabling users to customize the behavior of 3D models. Users could assign specific actions to 3D models, such as changing colors, navigating to external links, playing audio or video, displaying images, and resizing objects when clicked. The CMS provided a flexible interface for mapping targets (3D models) to specific content, allowing personalized AR experiences.',
    reverse: false,
  },
  {
    id: 4,
    // image: '/assets/projects/11.png',
    image: p4,
    title: 'Illumination for App based AR - Research Project',
    description: 'This research focuses on enhancing the realism of app-based Augmented Reality (AR) by dynamically identifying physical light sources and applying them in real time to render virtual objects with realistic shadows and reflections. Using only a mobile phone, the study leverages ARCore, and image processing to determine light direction from a live video stream. ',
    reverse: true,
  },
];

function Projects() {
  return (
    <section id='projects' className="projects">
      <h1 className='heading2'>My Projects</h1>
      <div className="projects-list">
        {projectsData.map((project) => (
          <Card key={project.id}
            project={project}
            image={project.image}
            title={project.title}
            paragraph={project.description}
            link={`/projects/${project.id}`} 
            reverse={project.reverse} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
