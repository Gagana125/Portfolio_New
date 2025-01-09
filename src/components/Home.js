import React from 'react';
import './css/Home.css';
// import bg1 from '../assets/images/bg1.jpg'

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content" >
        {/* <div className='home-img-container'>
          <img className='home-img' src={bg1} alt="" />
        </div> */}
        {/* <img src={bg1} alt="" /> */}

        <div className="home-text">
        <h1>Gagana Samarasekara</h1>
        <p>Computer Science Undergraduate looking for a Software Engineer position</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
