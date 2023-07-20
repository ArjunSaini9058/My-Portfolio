import React from 'react';
import "./Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='pro-cantainer'>
      <h1 className='main-title'>Projects</h1>
      <div className='pro-box'>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/ncY636zv/addnote1.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/3JKLxW8v/addnote2.png"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/yYBG3vPW/addnote3.png"} alt="slide 3" />
            </div>
          </Carousel>
        </div>
        <div className='pro-content'>
          <h1>QuickNotes App</h1><br />
          <h3>Objective:</h3><span>This is a secure and efficient MERN application that allows users to register, login, and manage personal notes using CRUD operations.</span>
          <h3>Description:</h3><span>Built using MERN Stack with JWT authentication, password hashing.</span><br />
          <button className='dbtn pro-btn'>Explore</button>
        </div>
      </div>

      <div className='pro-box'>
        <div className='pro-content'>
          <h1>WeatherApp </h1><br />
          <h3>Objective:</h3><span>Created a weather web application provides weather report of all locations or countries.</span>
          <h3>Description:</h3><span>This website built using ReactJS and weather API. </span><br />
          <button className='dbtn pro-btn'>Explore</button>
        </div>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/jSMBbPy2/weather1.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/mgLKJ8zK/weather2.png"} alt="slide 2" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className='pro-box'>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/fWHdYb7X/tesla1.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/25Pckwyk/tesla2.png"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/7YdTQQWZ/tesla3.png"} alt="slide 3" />
            </div>
          </Carousel>
        </div>
        <div className='pro-content'>
          <h1>Tesla Clone</h1><br />
          <h3>Objective:</h3><span>For Learning MERN Stack</span>
          <h3>Description:</h3><span>This app is build using MERN Stack Technology.</span><br />
          <button className='dbtn pro-btn'>Explore</button>
        </div>
      </div>

      <div className='pro-box'>
        <div className='pro-content'>
          <h1> GPS GSM Based Security System for Accident Prevention</h1><br />
          <h3>Objective:</h3><span>To avoid any mishap this system detects the drowsiness, alcohol and alert the driver. </span>
          <h3>Description:</h3><span>We used Drowsiness sensor, Alcohol sensor, Tilt sensor and GPS GSM which send message
            to family or ambulance with accident location.
          </span><br />
          <button className='dbtn pro-btn'>Explore</button>
        </div>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/0jJFgqvG/project2.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/Dy1fs9Gb/project1.jpg"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/bY7NZyZh/pro.png"} alt="slide 3" />
            </div>
          </Carousel>
        </div>
      </div>
      <Link to="/projects"><button className='see-projects'>See More Projects</button></Link>
    </div>
  );
}

export default Projects;
