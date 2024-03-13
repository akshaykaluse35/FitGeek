import React, { useState } from 'react';

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

    return(
        <>
            <form onSubmit={submitForm}>
                <label htmlFor="search">Track your exercise</label>
                <input type="text" placeholder='Enter what you you have done' name='search' value={search} onChange={searchedQuery} />
                <button type='submit'>Submit</button>
            </form>

            <div>
                {apiData && (
                    <>
                        <h1>Duration of the Exercise: {apiData.duration_min}</h1>
                        <h1>Type of Exercise: {apiData.name}</h1>
                        <h1>Calories burned: {apiData.nf_calories}</h1>
                        <img src={apiData.photo.thumb} id="aws-photo-url" alt=" for API" />
                    </>
                )}
            </div>

        </>
    )
}

export default ExerciseTracking;
