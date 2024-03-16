import React from 'react'
import medImage from '../../images/meditation.svg';
import '../../user-pages/nutritionTrackerStyling.css';
import '../../styles/meditation.css';
import { AudioPlayer } from '../../components/AudioPlayer';
import NavbarMH from './NavbarMH';
import cardImg from '../../images/med-card-1.png';
const Meditation = () => {
  return (
    <>
      <NavbarMH />
      <section>
        <div className="med-container">
          <div className="med-info-container">
            <div className="med-info-text-container">
              <h1>Meditation made simple</h1>
              <h3>
                Guided meditations to help you manage life's more challenging
                moments
              </h3>
              <p>
                Meditation is a life skill. By using guided meditations from
                Headspace, you learn to be more present for everything you do.
                And with practice, meditation benefits are experienced over time
                as you feel clearer, calmer, kinder, and sharper.
              </p>
            </div>
            <div className="med-info-audio-container">
              hey this is audio section
              <AudioPlayer />
            </div>
            <div className="med-info-btn">
              <button>Try for free!!</button>
            </div>
          </div>
          <div className="med-image-container">
            <img
              src={medImage}
              alt="Description of the "
              width="750px"
              height="750px"
            />
          </div>
        </div>
      </section>

      <section>
          <div className="container-info">
              <div className="card-info-with-image"></div>
          </div>
      </section>

      {/* <section>
        <div class="cards-container">
          <div class="card">
            <img src={cardImg} alt="" srcset="" height='300px' width='300px' />
            <h1>This is card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam.</p>
          </div>
          <div class="card">
            <img src={cardImg} alt="" srcset="" height='300px' width='300px' />
            <h1>This is card 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam.</p>
          </div>
          <div class="card">
            <img src={cardImg} alt="" srcset="" height='300px' width='300px' />
            <h1>This is card 3</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam.</p>
          </div>
          <div class="card">
            <img src={cardImg} alt="" srcset="" height='300px' width='300px' />
            <h1>This is card 4</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam.</p>
          </div>
          <div class="card">
            <img src={cardImg} alt="" srcset="" height='300px' width='300px' />
            <h1>This is card 5</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quisquam.</p>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Meditation;
