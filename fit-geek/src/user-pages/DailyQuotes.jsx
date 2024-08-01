import React, { useState } from 'react';
import '../stylesheets/daily-qoutes.css';
import { useAuth } from "../store/authContext";

const DailyQuotes = () => {

  const [recipes, setRecipes] = useState([]);
  const { token } = useAuth();
  const [randomRecipe, setRandomRecipe] = useState(null);
  
  const [apiData, setApiData] = useState("");

  const recipeAPI = async() =>{
    try {
      
      const response = await fetch("http://localhost:5000/users", {
        method: "GET",
        headers: {Authorization: `Bearer ${token}`},
      });
      
      if(response.ok){
        const data = await response.json();
        setApiData(data);
        console.log(apiData);
        setRecipes(data.matchedRecipes || []);
        // Set a random recipe
        if (data.matchedRecipes && data.matchedRecipes.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.matchedRecipes.length);
          setRandomRecipe(data.matchedRecipes[randomIndex]);
        }
      }
    } catch (error) {
      console.log("Error in Recipe API", error); 
    }
  }


  return (
    <>
      <div className="daily-qoutes-container">
        <div class="group">
          <div class="group-img"></div>
          <div class="group-text">
            <h2>
              Get Your Info in <br /> Just One CLick
            </h2>

      {apiData && (
        <div class="card-user-info-dashboard">
        <div class="title-user-info-dashboard">
        </div>
        <div class="wrapper-user-info-dashboard">
          <div class="color black">
            Username
            <span class="hex">{apiData.username}</span>
          </div>
          <div class="color eerie-black">
            Weight
            <span class="hex">{apiData.weight}</span>
          </div>
          <div class="color chinese-black">
          Height
            <span class="hex">{apiData.height}</span>
          </div>
          <div class="color night-rider">
          Gender
            <span class="hex">{apiData.gender}</span>
          </div>
          <div class="color chinese-white">
          Age
            <span class="hex">{apiData.age}</span>
          </div>
          <div class="color anti-flash-white">
          Your Deit Preference: 
            <span class="hex">{apiData.deitary_preference}</span>
          </div>
          <div class="color white">
          Your calculated BMR: 
            <span class="hex">{apiData.bmr}</span>
          </div>
        </div>
      </div>
      )}
          </div>
          <button onClick={recipeAPI} class="group-button">
            Get Data
          </button>
        </div>

        <div className="recipe-card">
          <div class="card-hover">
            <div class="card-hover__content">
              <h3 class="card-hover__title">
                Here's Your Recipes <span>Make it</span> right now!
              </h3>
              <p class="card-hover__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia quisquam doloremque nostrum laboriosam, blanditiis
                libero corporis nulla a aut?
              </p>
              <a href="#" class="card-hover__link">
                <span>Get Full Recipe</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
            <div class="card-hover__extra">
              <h4>
                Cook <span>now</span> and get <span>fit</span> with Us
              </h4>
            </div>
            {randomRecipe && (
              <div className="random-recipe-container">
                <h1>Recipe</h1>
                <div className="recipe-card">
                  <img src={randomRecipe.image} alt={randomRecipe.name} />
                  <h3>{randomRecipe.name}</h3>
                  <p>
                    <strong>Ingredients:</strong>{" "}
                    {randomRecipe.ingredients.join(", ")}
                  </p>
                  <p>
                    <strong>Calories:</strong> {randomRecipe.calories}
                  </p>
                  <p>
                    <strong>Preparation Time:</strong>{" "}
                    {randomRecipe.preparationTime} minutes
                  </p>
                  <p>
                    <strong>Instructions:</strong> {randomRecipe.instructions}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyQuotes;


