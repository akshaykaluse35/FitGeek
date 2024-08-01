const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    muscle:{
        type: String,
        required: true,
    },
    sets:{
        type: String,
        required: true,
    },
    explanation:{
        type: String,
        required: true,
    },
    equipment:{
        type: String,
        required: true,
    },
    inensity:{
        type: String,
        required: true,
    },
    beginner_set:{
        type: String,
        required: true,
    },
    intermediate_set:{
        type: String,
        required: true,
    },
    advanced_set:{
        type: String,
        required: true,
    },
    long_explanation:{
        type: String,
        required: true,
    },
    workout_name:{
        type: String,
        required: true,
    },
    video:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
});

const Exercise = new mongoose.model("Exercise", exerciseSchema)

module.exports = Exercise;