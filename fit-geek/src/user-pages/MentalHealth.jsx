import React from 'react';
import cloudMH from '../images/cloud-mh.png';
import './nutritionTrackerStyling.css';
import { Link } from 'react-router-dom';

const MentalHealth = () => {
  return (
    <>
      <section>
        <div className="mh-container">
          <div className="mh-card-1">
              <div className="mh-mini-card">
                  <h2>Prioritize your mental health</h2>
                  <img src={cloudMH} alt="sample card img" height='150px' width='150px'/>
              </div>
              <p>Discover guided meditations and programs that help you stress less and learn to handle new challenges with ease.</p>
          </div>

          <div className="mh-card-2">
                <div className="mh-mini-card">
                    <h2>Get more restful sleep</h2>
                    <img src={cloudMH} alt="sample card img" height='150px' width='150px' />
                </div>
              <p>Find your perfect bedtime routine with hours of relaxing music, sounds, bedtime stories, and exercises.</p>
          </div>

          <div className="mh-card-3">
              <div className="mh-mini-card">
                  <h2>Explore 500+ meditations</h2>
                  <img src={cloudMH} alt="sample card img" height='150px' width='150px' />
              </div>
              <p>Access our entire library of meditations, sleep sounds, yoga and fitness, and focus music.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mh-mid-card">
            <div className="mh-mid-card-text">
               <h1>Headspace and LinkedIn Team Up To Launch New Tools for Managing Emotions at Work.</h1>
               <p>To help improve mental health at work, we'
                ve teamed up with LinkedIn to offer constructive, tangible tools to help you navigate everyday workplace challenges.</p>
               <button>Click me !!</button>
            </div>
            <img src={cloudMH} alt="sample pic" height='500px' width='500px' />
         </div>
      </section>

      <section>
        <div className="mh-main-card-conatainer">
          <div className="mh-main-mini-card-1">
              <img src={cloudMH} alt="" height='200px' width='200px' />
              <h2>Meditation</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <button>Click me!</button>
          </div>
          <div className="mh-main-mini-card-2">
              <img src={cloudMH} alt="" height='200px' width='200px' />
              <h2>Meditation</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <button>Click me!</button>
          </div>
          <div className="mh-main-mini-card-3">
              <img src={cloudMH} alt="" height='200px' width='200px' />
              <h2>Meditation</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <Link to="/user/mental-health/meditation">
                  <button>Click me!</button>
              </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default MentalHealth
