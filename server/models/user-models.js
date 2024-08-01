const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    weight:{
        type: String,
        required: true,
    },

    height:{
        type: String,
        required: true,
    },

    gender:{
        type: String,
        required: true,
    },

    age:{
        type: String,
        required: true,
    },

    activity_level:{
        type: String,
        required: true,
    },

    deitary_preference:{
        type: String,
        required: true,
    },

    health_goals:{
        type: String,
        required: true,
    },

    phone:{
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },

    isAdmin:{
        type: Boolean,
        default: false,
    },
});


userSchema.methods.generateToken = async function (){
    try {
        return await jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
                process.env.JWT_SECRET_KEY,
            {
                    expiresIn: "50d",
            }                    
        )
    } catch (error) {
        console.error('Token generation error:', error.message);
        return null;
    }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;

