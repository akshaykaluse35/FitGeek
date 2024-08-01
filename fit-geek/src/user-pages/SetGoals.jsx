import React, { useState } from 'react';
import '../stylesheets/set-goals.css'
const FitnessGoals = () => {
  const [dailyGoals, setDailyGoals] = useState({
    workouts: 1,
    calories: 500,
    activity: ''
  });

  const [weeklyGoals, setWeeklyGoals] = useState({
    workouts: 5,
    calories: 2500,
    activity: ''
  });

  const handleInputChange = (e, isDaily) => {
    const { name, value } = e.target;
    if (isDaily) {
      setDailyGoals({ ...dailyGoals, [name]: value });
    } else {
      setWeeklyGoals({ ...weeklyGoals, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to save goals, e.g., call an API
    console.log('Daily Goals:', dailyGoals);
    console.log('Weekly Goals:', weeklyGoals);
  };

  return (
    <div className="fitness-goals">
      <h2>Set Your Fitness Goals</h2>
      <form onSubmit={handleSubmit}>
        <div className="goals-section">
          <h3>Daily Goals</h3>
          <label>
            Workouts:
            <input
              type="number"
              name="workouts"
              value={dailyGoals.workouts}
              onChange={(e) => handleInputChange(e, true)}
            />
          </label>
          <label>
            Calories to Burn:
            <input
              type="number"
              name="calories"
              value={dailyGoals.calories}
              onChange={(e) => handleInputChange(e, true)}
            />
          </label>
          <label>
            Activity:
            <input
              type="text"
              name="activity"
              value={dailyGoals.activity}
              onChange={(e) => handleInputChange(e, true)}
            />
          </label>
        </div>

        <div className="goals-section">
          <h3>Weekly Goals</h3>
          <label>
            Workouts:
            <input
              type="number"
              name="workouts"
              value={weeklyGoals.workouts}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Calories to Burn:
            <input
              type="number"
              name="calories"
              value={weeklyGoals.calories}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
          <label>
            Activity:
            <input
              type="text"
              name="activity"
              value={weeklyGoals.activity}
              onChange={(e) => handleInputChange(e, false)}
            />
          </label>
        </div>

        <button type="submit">Save Goals</button>
      </form>
    </div>
  );
};

export default FitnessGoals;
