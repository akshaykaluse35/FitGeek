import React from 'react';
import '../stylesheets/track-exerice-card.css';
import { Link } from 'react-router-dom';

const TrackExerciseCard = () => {
  return (
    <>
      <div className="watch-container">
        <div className="watch">
          <div className="frame">
            <div className="text">
              <div className="title-exercise">Calculate Your Exercise </div>
              <br />
              <div>
                <Link to="/user/exercise-tracking">
                  <button
                    className="button-11"
                    role="button"
                    onClick={() => console.log("Button clicked")}
                  >
                    <h1>Track</h1>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="sideBtn"></div>
          <div className="powerBtn"></div>
          <div className="dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackExerciseCard



