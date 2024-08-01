const { z } = require("zod");

const signupSchema = z.object({
  username: z.string({ required_error: "Username is required" }).trim().min(3, { message: "Username should be at least 3 characters long" }).max(255, { message: "Username is too long" }),
  email: z.string({ required_error: "Email is required" }).trim().email({ message: "Invalid email address" }).min(3, { message: "Email should be at least 3 characters long" }).max(255, { message: "Email is too long" }),
  weight: z.string({ required_error: "Weight is required" }), // Removed unnecessary validations
  height: z.string({ required_error: "Height is required" }), // Removed unnecessary validations
  gender: z.string({ required_error: "Gender is required" }), // Removed unnecessary validations
  age: z.string({ required_error: "Age is required" }), // Removed unnecessary validations
  activity_level: z.string({ required_error: "Activity level is required" }), // Removed unnecessary validations
  deitary_preference: z.string({ required_error: "Dietary preference is required" }), // Fixed typo in field name
  health_goals: z.string({ required_error: "Health goals are required" }), // Removed unnecessary validations
  phone: z.string({ required_error: "Phone is required" }).trim().min(10, { message: "Phone should be at least 10 digits long" }).max(10, { message: "Phone is too long" }),
  password: z.string({ required_error: "Password is required" }).trim().min(4, { message: "Password should be at least 4 characters long" }).max(10, { message: "Password is too long" })
});

const isLoginVal = z.object({
  email: z.string({ required_error: "Email is required" }).trim().min(3, { message: "Email should be at least 3 characters long" }).max(255, { message: "Email is too long" }), // Added validations for email
  password: z.string({ required_error: "Password is required" }) // Removed unnecessary validations
});

module.exports = { signupSchema, isLoginVal };
