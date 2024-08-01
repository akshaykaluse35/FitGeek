require("dotenv").config();
const bodyParser = require('body-parser');
const errorMiddleware = require("./error-middleware/error-middleware");
const cors = require("cors");
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const userdashboardRouter = require("./router/userDashboard-router");
const connectDb = require("./utils/db");
const recipeRoute = require("./router/recipe-router")
const bmrRoute = require("./router/bmr-router")
// const matchRoute = require('./router/match-router')

app.use(cors());
app.use(bodyParser.json());

app.use("/", authRouter);
app.use("/", recipeRoute)
app.use("/", contactRoute);
// app.use("/", matchRoute);
app.use("/", bmrRoute)
app.use("/", userdashboardRouter);

app.post('/api/goals', (req, res) => {
  const { dailyGoals, weeklyGoals } = req.body;

  // Analyze goals
  const isRealistic = dailyGoals.workouts <= 2 && weeklyGoals.workouts <= 7;
  const dailyCaloriesToBurn = Math.round(weeklyGoals.calories / 7);
  
  let message = 'Goals successfully saved!';
  if (!isRealistic) {
    message = 'Your goals seem ambitious. Make sure to take rest days!';
  }

  // Calculate daily caloric needs (simplified example)
  const caloriesIntakeSuggestion = 2000 - dailyCaloriesToBurn;

  res.json({
    message,
    dailyCaloriesToBurn,
    caloriesIntakeSuggestion,
    encouragement: "Keep up the good work! Remember, consistency is key to achieving your fitness goals."
  });
});


app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
