import React from 'react'
import {Link} from 'react-router-dom';
import medImage from '../../images/meditation.svg';
import '../../user-pages/nutritionTrackerStyling.css';
import '../../styles/meditation.css';
import { AudioPlayer } from '../../components/AudioPlayer';
import NavbarMH from './NavbarMH';
// import medBGimage from '../../images/meditation-bg-image.png'
import Footer from '../../footer/Footer';
import medCardImage from '../../images/lady-with-pink-bg-meditation.jpg';
import manInBlueMeditation from '../../images/man-in-blue-meditation.jpg';
import ladyMeditationWithMatt from '../../images/lady-meditation-with-matt.jpg';
import girlMeditatingBluePurple from '../../images/girl-meditating-blue-purple.svg'
import girlMeditatingWithBrownHairsPurpleTshirt from '../../images/girl-meditating-with-brown-hairs-purple-tshirt.svg'
import girlMeditatingWithRedishHairsNoBg from '../../images/girl-meditating-with-redish-hairs-no-bg.svg'
import girlMeditatingRedTshirtBluePants from '../../images/girl-meditating-red-tshirt-blue-pants.svg'
import girlMeditatingLeavesBg from '../../images/girl-meditating-leaves-bg.svg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import audioMed from "../../audio-files/mainAudio.wav"

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
              <AudioPlayer audioFile={audioMed}/>
            </div>
            <div className="med-info-btn">
              <button class="button-17" role="button">Try for free!!</button>
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

      <section></section>

      <section>
        <div class="cards-container" >
        
          <div class="card-meditation-new">
            <img
              src={girlMeditatingBluePurple}
              alt=""
              srcset=""
              height="300px"
              width="300px"
            />
            <Link to="/user/mental-health/meditation/visual-meditation"><h1>Visualization meditation</h1></Link>
            
            <p>
              Visualisation Meditation is a common meditation technique
              spiritual leaders and psychotherapists use. Alternative medicine,
              such as Reiki, helps the meditator achieve relaxation, peace of
              mind and healing.
            </p>
          </div>
          <div class="card-meditation-new">
            <img
              src={girlMeditatingWithBrownHairsPurpleTshirt}
              alt=""
              srcset=""
              height="300px"
              width="300px"
            />
            <Link to="/user/mental-health/meditation/transcandel-meditation"><h1>Transcendental Meditation</h1></Link>
            <p>
              Maharishi Mahesh Yogi founded Transcendental Meditation (™). It is
              a silent type of Meditation that is practiced daily for 15-20
              minutes. It involves silently chanting a mantra.
            </p>
          </div>
          <div class="card-meditation-new">
            <img
              src={girlMeditatingWithRedishHairsNoBg}
              alt=""
              srcset=""
              height="300px"
              width="300px"
            />
            
            
            <Link to="/"><h1>Guided Meditation</h1></Link>

            <p>
              Guided meditation, which is sometimes also called guided imagery
              or visualization, is a method of meditation in which you form
              mental pictures or situations that you find relaxing.
            </p>
          </div>
          <div class="card-meditation-new">
            <img
              src={girlMeditatingRedTshirtBluePants}
              alt=""
              srcset=""
              height="300px"
              width="300px"
            />
              <Link to="/"><h1>Vipassana Meditation (Sayagyi U Ba Khin Tradition)</h1></Link>
            <p>
              An ancient Indian form of meditation, vipassana means to see
              things as they really are. It dates back more than 2,500 years and
              is credited for the mindfulness meditation movement in the United
              States.
            </p>
          </div>
          <div class="card-meditation-new">
            <img
              src={girlMeditatingLeavesBg}
              alt=""
              srcset=""
              height="300px"
              width="300px"
            />
            <Link to="/"><h1>Chakra Meditation</h1></Link>

            <p>
              Chakra is an ancient Sanskrit word that translates to “wheel,” and
              can be traced back to India. Chakras refer to the centers of
              energy and spiritual power in the body. There are thought to be
              seven chakras. Each chakra is located at a different part of the
              body along the spine, and each has a corresponding color.
            </p>
          </div>
        </div>
      </section>

      <div className="link-card-container">
        <div
          className="link-card"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              maxWidth: 500,
              margin: "auto",
              transition: "box-shadow o.8s",
              "&:hover": {
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)", // Adjust the values as needed
              },
              backgroundColor: "#F9F4F2",
              borderRadius: "15px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={medCardImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h2>Guided Meditation</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  From courses, single exercises, and bite-sized sessions,
                  Headspace teachers provide guided meditations to help you
                  navigate whatever life throws your way.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ margin: "15px" }}>
              <ul className="links-a-tag">
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Body scan meditation to reduce stress</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Gratitude meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Walking meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Running meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Meditation for compassion</a>
                </li>
              </ul>
            </CardActions>
          </Card>
        </div>

        <div
          className="link-card"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              maxWidth: 500,
              margin: "auto",
              transition: "box-shadow o.8s",
              "&:hover": {
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)", // Adjust the values as needed
              },
              backgroundColor: "#F9F4F2",
              borderRadius: "15px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={manInBlueMeditation}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h2>Meditation benefits</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Meditation is a straightforward practice to help you look
                  after your mind and improve your mental health. Learn what a
                  regular practice can do for you.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ margin: "15px" }}>
              <ul>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Body scan meditation to reduce stress</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Gratitude meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Walking meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Running meditation</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">Meditation for compassion</a>
                </li>
              </ul>
            </CardActions>
          </Card>
        </div>

        <div
          className="link-card"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            sx={{
              maxWidth: 500,
              margin: "auto",
              transition: "box-shadow o.8s",
              "&:hover": {
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.5)", // Adjust the values as needed
              },
              backgroundColor: "#F9F4F2",
              borderRadius: "15px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="428"
                image={ladyMeditationWithMatt}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h2>How to meditate</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  You couldn't be in better hands when it comes to learning how
                  to meditate. Read up on all the latest guidance and tips to
                  get your practice started.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ margin: "15px", textDecoration: "underline" }}>
              <ul>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">How to meditate</a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">
                    What is the difference between thinking and meditating?
                  </a>
                </li>
                <li
                  style={{
                    marginBottom: "1.5rem",
                    textDecoration: "underline",
                  }}
                >
                  <a href="#">
                    What the Noting Technique is, and how to take advantage of
                    it
                  </a>
                </li>
              </ul>
            </CardActions>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Meditation;
