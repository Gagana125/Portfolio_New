import React from "react";
import './css/Resume.css';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import bg4 from '../assets/images/bg4.jpg';
import html from '../assets/images/html.png';
import css from '../assets/images/css-3.png';
import react from '../assets/images/atom.png';
import node from '../assets/images/programing.png';
import aframe from '../assets/images/aframe.png';
import mind from '../assets/images/mind.png';
import three from '../assets/images/images.png';
import c from '../assets/images/c.png';
import java from '../assets/images/java.png';
import c2 from '../assets/images/c2.png';
import py from '../assets/images/py.png';
import mysql from '../assets/images/mysql.png';
import postgresql from '../assets/images/postgresql.png';
import mongo from '../assets/images/mongo.png';
import flutter from '../assets/images/flutter.png';
// import { Rating } from "@mui/material";
import CustomRating from "./UI/CustomRating";

const Resume = () => {
  return (
    <section id="resume" className="resume-container">
      <h1 className="heading">Resume</h1>
      <div className="resume-outline">
        <div className="resume-image">
          <img className="resume-img" src={bg4} alt="resume" />
        </div>
        <div className="resume-content">
          <h2 className="resume-heading">Education</h2>
          <p className="title">BSc. (Hons.) in Computer Science</p>
          <div className="details">
            <p>University of Colombo</p>
            <p>2021 - 2025</p>
          </div>
          <p className="title">Diploma in Information Technology</p>
          <div className="details">
            <p>University of Colombo</p>
            <p>2020 - 2021</p>
          </div>
          <p className="title">School</p>
          <div className="details">
            <p>Sri Sumangala Balika Maha Vidyalaya</p>
            <p>2005 - 2018</p>
          </div>
          <hr />
          <h2 className="resume-heading">Work Experience</h2>
          <p className="title">Software Engineer Intern (Reasearch Intern)</p>
          <div className="details">
            <p>University of Colombo School of Computing</p>
            <p>2023 Nov - 2024 May</p>
          </div>
        </div>
      </div>
      <div className="tech-stack-outline">
        <h2 className="resume-heading">Technology Stack</h2>
        <div >
          <ul className="tech-stack">
            <div className="tech-stack-responsive">
              <div className="tech-stack-list">

                <h6 className="tech-name">Frontend Technologies</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={html} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>HTML</li>
                    {/* <ProgressBar now={80} label={`${80}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={4} />
                  </div>

                </div>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={css} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>CSS</li>
                    {/* <ProgressBar now={80} label={`${80}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={4} />
                  </div>

                </div>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={react} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>React.js</li>
                    {/* <ProgressBar now={70} label={`${70}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>

                <h6 className="tech-name">Backend Technologies</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={node} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Node.js</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>

              </div>

              <div className="tech-stack-list">

                <h6 className="tech-name">Programming Languages</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={c} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>C</li>
                    {/* <ProgressBar now={80} label={`${80}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={java} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Java</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={c2} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>C++</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={py} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Python</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>

              </div>
            </div>

            <div className="tech-stack-responsive">
              <div className="tech-stack-list">
                <h6 className="tech-name">Database</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={mysql} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>MySQL</li>
                    {/* <ProgressBar now={80} label={`${80}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={4} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={postgresql} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>PostgreSQL</li>
                    {/* <ProgressBar now={70} label={`${70}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={mongo} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>MongoDB</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>

                <h6 className="tech-name">Mobile Application</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={flutter} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Flutter</li>
                    {/* <ProgressBar now={70} label={`${70}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>
              </div>

              <div className="tech-stack-list">
                <h6 className="tech-name">AR/VR related Technologies</h6>

                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={aframe} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>AFrame</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={mind} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Mind AR</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={3} />
                  </div>

                </div>
                <div className="tech-bar-list">
                  <div className="tech-image">
                    <img className="tech-image" src={three} alt="" />
                  </div>
                  <div className="tech-bar">
                    <li>Three.js</li>
                    {/* <ProgressBar now={60} label={`${60}%`} variant="custom-bar" /> */}
                    <CustomRating defaultValue={2} />
                  </div>

                </div>
              </div>
            </div>



          </ul>
        </div>
      </div>
    </section>

  );
};

export default Resume;