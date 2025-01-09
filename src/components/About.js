import React from 'react';
import './css/About.css';
import bg2 from '../assets/images/bg2.jpg';

const About = () => {

  return (
    <section className="about" id="about">
      <h1 className='heading'>About Me</h1>
      <div className='about-outline'>
        <div className='about-content'>
          <p>
            I am Gagana Samarasekara, a final-year Computer Science undergraduate at the University of Colombo School of Computing.
            I am passionate about technology, with a strong interest in both Augmented Reality (AR) and web development.
            I enjoy exploring innovative ways to create impactful applications that blend creativity with functionality.
            Over the years, I’ve successfully balanced academics with extracurricular activities, which has shaped me into a well-rounded individual.
          </p>
          <p>
            During my school and university years, I actively participated in sports, with table tennis being my main focus, and won several tournaments.
            I was also involved in clubs like AIESEC and Rotaract, where I gained valuable experience in teamwork and leadership.
            These experiences have taught me how to collaborate effectively and take on leadership roles when needed.
            I bring this same dedication and enthusiasm to all my projects and look forward to contributing to exciting challenges in both AR and web development.
          </p>
          <p>
            In addition to my technical expertise, I pride myself on being a determined and goal-oriented individual who thrives in dynamic environments. 
            I am eager to apply my skills and experiences to develop innovative solutions, contribute to impactful projects, and grow as a professional in the tech industry.
          </p>
        </div>
        <div className='about-img'>
          <img className="about-image" src={bg2} alt="Gagana Samarasekara" />
        </div>
      </div>
    </section>
  );
};

export default About;
