import React, { useState } from 'react';
import '../stylesheets/exercise-tracking.css'

const ExerciseTracking = () => {
    const [apiData, setApiData] = useState("");
    const [search, setSearch] = useState(""); // Provide an initial value

    const searchedQuery = (e) => {
        const newValue = e.target.value;
        setSearch(newValue);
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        if (!search.trim()) { // Check if search is empty or just whitespace
            console.log("Please enter a valid search query");
            return;
        }
        try {
            const response = await fetch('https://trackapi.nutritionix.com/v2/natural/exercise', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': '240b598c',
                    'x-app-key': '246464e848f6edcfd6c3ea1578876791'
                },
                body: JSON.stringify({
                    "query": search
                }) 
            });
            
            if(response.ok){
                const data = await response.json();
                setApiData(data.exercises[0]);
                console.log(data);
            }
        } catch (error) {
            console.log("Error in exercise tracking API", error);
        }
    }

    return (
      <>
        <form onSubmit={submitForm}>
          <label htmlFor="search" className="formbold-form-label">
            <h1>Track your exercise</h1>
          </label>
          <input
            type="text"
            placeholder="Enter what you you have done"
            name="search"
            value={search}
            className="formbold-form-input"
            onChange={searchedQuery}
          />

        <button type="submit" class="button-17" role="button">Calculate</button>

        </form>

        <div>
          {apiData && (
            <>
              <div className="container-exerice-tracking">
                <div class="card-exercise-tracking">
                  <div class="card-content-exercise-tracking">
                    <div class="card-top-exercise-tracking">
                      <span class="card-title-exercise-tracking"></span>
                      <h2>Exercise Information.</h2>
                    </div>

                    <h3>Duration of the Exercise: {apiData.duration_min}</h3>
                    <h3>Type of Exercise: {apiData.name}</h3>
                    <h3>Calories burned: {apiData.nf_calories}</h3>
                    <img
                      src={apiData.photo.thumb}
                      id="aws-photo-url"
                      alt=" for API"
                    />
                  </div>
                  <div class="card-image"></div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
}

export default ExerciseTracking;
