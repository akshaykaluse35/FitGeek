const Recipe = require('../models/recipes-model')

const recipe = async (req, res) => {
    try {
      
      // console.log(req.body);
      const {name,  ingredients, dietaryTags, calories, preparationTime, instructions, createdAt} = req.body;
      // console.log(req.body);
      const recipeExist = await Recipe.findOne({name})
  
      if(recipeExist){
        return res.status(400).json({message:"Recipe already exist"})
      }
      const newRecipe = await Recipe.create({ name, ingredients, dietaryTags, calories, preparationTime, instructions, createdAt });
      res.status(201).json({ msg: "Registration successful" });
  
    } catch (error) {
      console.error("Error in Recipe function:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports =  {recipe} ;
  