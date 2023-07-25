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
              <img src={"https://i.postimg.cc/gj4Mg06d/todo1-min.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/qvNmG4BV/todo2-min.png"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/kMyhJTYZ/todo3-min.png"} alt="slide 3" />
            </div>
          </Carousel>
        </div>
        <div className='pro-content'>
          <h1>QuickNotes App</h1><br />
          <h3>Objective:</h3><span>This is a secure and efficient MERN application that allows users to register, login, and manage personal notes using CRUD operations.</span>
          <h3>Description:</h3><span>Built using MERN Stack with JWT authentication, password hashing.</span><br />
          <a href="https://main--myquicknotesapp.netlify.app/"><button className='dbtn pro-btn'>Explore</button></a>
        </div>
      </div>

      <div className='pro-box'>
        <div className='pro-content'>
          <h1>WeatherApp </h1><br />
          <h3>Objective:</h3><span>Created a weather web application provides weather report of all locations or countries.</span>
          <h3>Description:</h3><span>This website built using ReactJS and weather API. </span><br />
          <a href="https://myweather-app-arjun.netlify.app/"><button className='dbtn pro-btn'>Explore</button></a>
        </div>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/R0fXjdng/weather1-min.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/1tQJPFGs/weather2-min.png"} alt="slide 2" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className='pro-box'>
        <div className='pro-img'>
          <Carousel>
            <div>
              <img src={"https://i.postimg.cc/0jXpqRDP/tesla1-min.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/Gtm09YNd/tesla2-min.png"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/xdPN2VVh/tesla3-min.png"} alt="slide 3" />
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
              <img src={"https://i.postimg.cc/mkJdRHWd/project2-min.png"} alt="slide 1" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/HLJWSGsb/project1-min.jpg"} alt="slide 2" />
            </div>
            <div>
              <img src={"https://i.postimg.cc/Hs7JLyCQ/pro-min.png"} alt="slide 3" />
            </div>
          </Carousel>
        </div>
      </div>
      <Link to="/projects"><button className='see-projects'>See More Projects</button></Link>
    </div>
  );
}

export default Projects;
