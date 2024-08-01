const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: {
    type: [String],
    required: true 
  },
  dietaryTags: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  preparationTime: {
    type: Number, // time in minutes
    required: true
  },
  instructions: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
