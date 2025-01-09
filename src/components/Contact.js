import React from "react";
import './css/Contact.css';
import cont2 from '../assets/images/cont2.jpg';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <h1 className="heading">Contact Me</h1>
      <div className="contact-content">
      <div className="contact-img-container">
        <img className="contact-img" src={cont2} alt="" />
        </div>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fa fa-map-marker"></i> 210, Wele Pansala Rd, Kuda Waskaduwa, Waskaduwa
            </li>
            <li>
              <i className="fa fa-phone"></i> +94 763818641
            </li>
            <li>
              <i className="fa fa-envelope"></i> gbeyandi27@gmail.com
            </li>
            <li>
              <a href="https://github.com/Gagana125" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" ></i> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gagana-samarasekara/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" ></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        

      </div>
    </section>
  );
};

export default Contact;
