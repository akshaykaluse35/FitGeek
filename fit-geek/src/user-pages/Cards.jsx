import React from 'react';
import './nutritionTrackerStyling.css';
import TrackNutrientsCrad from './MeditationCard';
import TrackExerciseCard from './TrackExerciseCard';
import DailyQuotes from './DailyQuotes';
import HowToDoExerciseCard from './HowToDoExerciseCard';
import SetGaols from '../user-pages/SetGoals'
const NutritionCard = () => {
  return (
    <>
      {/* this is for calculating nutrients of foods */}
      <div className="card-container">
        <DailyQuotes />
        <div className="manage-container">
          <TrackExerciseCard />
          <TrackNutrientsCrad />
        </div>
        <HowToDoExerciseCard/>
        <SetGaols/>
      </div>

      {/*  
      <card>
        <div className="container_card">
          <div className="text-holder">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
            repudiandae!
           
          </div>
          <div className="img-holder">
            <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
          </div>
        </div>
      </card> */}

      {/* this card is for exercise tracking  */}
      {/* <card>
        <div className="container_card_exercise">
          <div className="text-holder">
            Track your exercise
            <Link to="/user/exercise-tracking">
              <button className="btn-for-nutrition-card">Click me!! </button>
            </Link>
          </div>
          <div className="img-holder">
            <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
          </div>
        </div>
      </card> */}

      {/* this is for mental health and meditation which includes yoga  */}


      {/* This section for how to do exersices */}
      {/* <card>
        <div className="container_card_exercise">
          <div className="text-holder">
            Join our us and explore our fitness world!!
            <Link to="/user/exercises">
              <button className="btn-for-nutrition-card">Click me!! </button>
            </Link>
          </div>
          <div className="img-holder">
            <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
          </div>
        </div>
      </card> */}
    </>
  );
}

export default NutritionCard;
