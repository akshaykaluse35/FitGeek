import React from 'react';
import NavbarMH from '../user-pages/mental_health/NavbarMH';
import { AudioPlayer } from '../components/AudioPlayer';
import audiofile12 from '../audio-files/GuidedMeditation12.mp3'
import audioFile11 from '../audio-files/GuidedMeditation11.mp3';
import audioFile13 from '../audio-files/GuidedMeditation13.mp3';
import image from '../images/man-in-blue-meditation.jpg';
import image2 from '../images/peanuts.jpg';
import '../stylesheets/visual-meditation.css'


const VisualMeditation = () => {
  return (
    <>
      <NavbarMH />

      <div className="med-type-getting-started">
        <div className="start-with-the-basics">
          <h1>Start with the basics</h1>
          <h4>
            Start your meditation practice with a 10-day beginner’s course —
            available in the Headspace app during your free trial.
          </h4>
        </div>
      </div>

      <div className="med-type-container">
          <div className="med-type-heading">
                <div className="med-info-audio-container">
                    Guided Meditation
                  <AudioPlayer audioFile={audiofile12} />
                </div>
          </div>
          <div className="med-type-img">
                <img src={image} alt="" />
          </div>
      </div>
      
      <div className="med-type-container">
          <div className="med-type-heading">
                <div className="med-info-audio-container">
                    Guided Meditation
                  <AudioPlayer audioFile={audioFile11} />
                </div>
          </div>
          <div className="med-type-img">
                <img src={image2} alt="" />
          </div>
      </div>

      <div className="med-type-container">
          <div className="med-type-heading">
                <div className="med-info-audio-container">
                    Guided Meditation
                  <AudioPlayer audioFile={audioFile13} />
                </div>
          </div>
          <div className="med-type-img">
                <img src={image} alt="" />
          </div>
      </div>

      
    </>
  );
}

export default VisualMeditation
