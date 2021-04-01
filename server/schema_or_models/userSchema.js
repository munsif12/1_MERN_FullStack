/* 
Mongoose Schema vs. Model. A Mongoose model is a wrapper on the Mongoose schema.
 A Mongoose schema defines the structure of the document, default values, validators, etc.,
 whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
*/

const mongoose = require("mongoose");
//creating the schema for userData schema matlab data kis shape ma para hua hoga like sql ma taables ka ander kon  fields hote h wasa
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required"],
    minLength: [4, "User Name can't be less then 4 characters"],
    maxLength: [25, "User Name can't be greater then 25 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  work: {
    type: String,
    required: [true, "Work is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password can't be less then 4 characters"],
    maxLength: [25, "Password can't be greater then 25 characters"],
    trim: true,
  },
  cPassword: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password can't be less then 6 characters"],
    maxLength: [25, "Password can't be greater then 25 characters"],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//creating model mtlab single user ka data {name:"sdsd",age:"etc"..etc}
const UsersData = mongoose.model("usersData", userSchema); //("tablename",schemaname)

//exporting the model to be used in multiple pages
module.exports = UsersData;
