import React from 'react'
import '../stylesheets/how-to-do-exerice.css';
import { Link } from 'react-router-dom';
import exerciseWomen from '../images/exercise-women.png'
const HowToDoExerciseCard = () => {
  return (
    <>
      <div className="container-card-info">
        <div class="card-how-to-do-exerice">
          <div class="card-image-container">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              class="image-icon"
            >
            </svg> */}
            <img src={exerciseWomen} alt="" />
          </div>
          <p class="card-title-how-to-do-exerice">
            Want to Burn Some Calories, Join us{" "}
          </p>
          <p class="card-des">
            Discover the best way to achieve your fitness goals with our
            personalized workout plans, expert guidance, and comprehensive
            nutrition guides. Whether you're a beginner or a fitness enthusiast,
            our platform offers everything you need to stay motivated, track
            your progress, and get fit. Don't wait, start your journey to a
            healthier, happier you today!
          </p>
          <Link to="/user/exercises">
            <button class="button-17" role="button">
              Button 17
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HowToDoExerciseCard
