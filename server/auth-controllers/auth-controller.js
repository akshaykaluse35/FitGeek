const User = require("../models/user-models")
const bcrypt = require("bcryptjs")
const Recipe = require('../models/recipes-model')
const home = async (req, res) => {
  try {
    res.status(200).json({ msg: "Hello this is home page" });
  } catch (error) {
    console.log(error);
  }
};

// *-------------------
// Registration Logic
// *-------------------
const register = async (req, res) => {
  try {
    
    // console.log(req.body);
    const {username, email, weight, height, gender, age, activity_level, deitary_preference,  health_goals, phone, password} = req.body;
    // console.log(req.body);
    const userExists = await User.findOne({email})

    if(userExists){
      return res.status(400).json({message:"email already exist"})
    }
      const saltRound = 10;
      const hashPass = await bcrypt.hash(password, saltRound)
      const newUser = await User.create({username, email, weight, height, gender, age, activity_level, deitary_preference,  health_goals, phone, password:hashPass});
      res.status(201).json({msg: "registration succesful", token: await newUser.generateToken(), userId:newUser._id.toString()});
    

    
  } catch (error) {
    console.error("Error in register function:", error.message);
    res.status(500).json({ message: "Internal server error heheh" });
  }
};

//for login logic

const login = async(req, res) =>{
  try {

    const {email, password} = req.body;
    const userExists = await User.findOne({email})
    // console.log(userExists)
    if(!userExists){
      return res.status(400).json({message: "Invalid credentials"})
    }
    const isPassVal = await bcrypt.compare(password, userExists.password)

    if(isPassVal){
      return res.status(200).json({msg: "registration succesful", token: await userExists.generateToken(), userId:userExists._id.toString()});
    }else{
      return res.status(400).json({message: "inavalid username or password"});
    }

  } catch (error) {
    return res.status(400).json({msg: "this is login backend error"});
  }
}
const users = async (req, res) => {
  try {
    const userData = req.users;
    const weight = userData.weight;
    const username = userData.username;
    const height = userData.height;
    const gender = userData.gender;
    const age = userData.age;
    const deitary_preference = userData.deitary_preference.toLowerCase();

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
      throw new Error('Gender must be either "male" or "female"');
    }

    const matchedRecipes = await Recipe.find({
      dietaryTags: { $regex: new RegExp(`^${deitary_preference}$`, "i") },
      calories: { $lte: bmr }
    });

    if (matchedRecipes.length === 0) {
      return res.status(404).json({ message: 'No recipes found matching your criteria' });
    }

    // Only one response should be sent to the client
    res.status(200).json({ msg: "This is users data for BMR", weight, username, height, gender, age, deitary_preference, bmr, matchedRecipes });

  } catch (error) {
    console.error('Error in matchRecipesToUser function:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
}





module.exports = { home, register, login, users };