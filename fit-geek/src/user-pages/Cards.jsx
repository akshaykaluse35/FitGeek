import React from 'react';
import {Link} from 'react-router-dom';
import bowlVeggies from '../images/bowl-of-veggies.png';
import './nutritionTrackerStyling.css';
const NutritionCard = () => {
  return (
    <>
    {/* this is for calculating nutrients of foods */}
        <card>
            <div className="container_card">                       
                <div className="text-holder">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, repudiandae!
                    <Link to="/user/nutrients">
                        <button className='btn-for-nutrition-card'>Click me!! </button>
                    </Link>
                </div>
                <div className="img-holder">
                    <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
                </div>
            </div>
        </card>
        
        {/* this card is for exercise tracking  */}
        <card>
            <div className="container_card_exercise">                       
                <div className="text-holder">
                    Track your exercise 
                    <Link to="/user/exercise">
                        <button className='btn-for-nutrition-card'>Click me!! </button>
                    </Link>
                </div>
                <div className="img-holder">
                    <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
                </div>
            </div>
        </card>

        {/* this is for mental health and meditation which includes yoga  */}
        <card>
            <div className="container_card_exercise">                       
                <div className="text-holder">
                    Join our mental health, Meditation and Yoga campaign 
                    <Link to="/user/mental-health">
                        <button className='btn-for-nutrition-card'>Click me!! </button>
                    </Link>
                </div>
                <div className="img-holder">
                    <img src={bowlVeggies} alt="bowl with veggies" srcset="" />
                </div>
            </div>
        </card>
    </>
  )
}

export default NutritionCard;
