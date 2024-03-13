import React, { useState } from 'react';
import "../user-pages/nutritionTrackerStyling.css";

const NutritionTracker = () => {
    console.log("Component rendered");
    const [apiData, setApiData] = useState(null);
    const [search, setSearch] = useState("");

    const searchedQuery = (e) => {
        let newValue = e.target.value;
        setSearch(newValue);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked');

        try {
            const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-app-id': '240b598c',
                    'x-app-key': '246464e848f6edcfd6c3ea1578876791'
                },
                body: JSON.stringify({
                    "query": search // Use search directly
                })
            });

            if (response.ok) {
                const data = await response.json();
                setApiData(data.foods[0]);
                console.log(data, "lll"); // Log the resolved data, not the state variable
            } else {
                console.log("Error from fetching API data");
            }
        } catch (error) {
            console.log(`Error in API: ${error.message}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search Here</label>
                <input type="text" placeholder='Search here' name='search' value={search} onChange={searchedQuery} />
                <button type="submit">Submit</button>
            </form>

            <div>
                {apiData && (
                    <div className="cards">
                        <h1> Food Name: {apiData.food_name}</h1>
                        <h1> Calories: {apiData.nf_calories}</h1>
                        <h1> Serving Quantity: {apiData.serving_qty}</h1>
                        <h1> Protein: {apiData.nf_protein}</h1>
                        <h1> Sodium: {apiData.nf_sodium}</h1>
                        <h1> Sugar: {apiData.nf_sugars}</h1>
                        <h1> Carbs: {apiData.nf_total_carbohydrate}</h1>
                        <h1> Fat: {apiData.nf_total_fat}</h1>
                        <h1> Cholesterol: {apiData.nf_cholesterol}</h1>
                        <h1> Serving Unit: {apiData.serving_unit}</h1>
                        <h1> Serving Weight (grams): {apiData.serving_weight_grams}</h1>
                        <h2> Alternative Measures:</h2>
                        <ul>
                            {apiData.alt_measures.map((measure, index) => (
                                <li key={index}>
                                    Measure: {measure.measure}, 
                                    Serving Weight: {measure.serving_weight},
                                    Sequence: {measure.seq}
                                </li>
                            ))}
                        </ul>
                        <img id='aws-photo-url' src={apiData.photo.thumb} alt="Food" />
                    </div>
                )}
                {!apiData && <p>No data available</p>}
            </div>
        </>
    );
};

export default NutritionTracker;
