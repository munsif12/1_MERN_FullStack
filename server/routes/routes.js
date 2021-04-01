const express = require("express");
const Route = express.Router();

//getting model of user
const UserData = require("../schema_or_models/userSchema");

//adding a middle ware mtlab agr koi functionality perofrm krwany sa pahly kuch krwana hoto yani mtlab agr user direclty about page acces krrha h to check kro ka uskaalogin keya h k nhi pahly
//responce ko pany sa pahly agr koi functionality krwanii hoto middle warre use hota ha
//Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.
const checkLoginMiddleWare = (req, res, next) => {
  console.log("Comming from MiddleWare :- user is logged in ");
  next(); //next na lika to page pending pa rhy ga or ghoomta rhy ga
  //jab middle ware ka kam khtm hojata ha to ham next() ka use excution ko continue krny ka keya krty ha agr next ko call nhi keya to program isemiddle ware ka ander rah jai ga or further execution nhi hota jab tak next na likha to
};

//creating the routes
Route.get("/", checkLoginMiddleWare, (req, res) => {
  res.send("hello from Router the Home page");
});
Route.get("/about", (req, res) => {
  res.send("hello from Router the About Page");
});

//storing user registration data to mongodb atlas
Route.post("/register", async (req, res) => {
  try {
    const { userName, email, phone, work, password, cPassword } = req.body; //destructuring
    if (!userName || !email || !phone || !work || !password || !cPassword) {
      /*checking for null values */
      res.status(422).json({ message: "Please fillout every field properly." });
    } else {
      const checkIfEmailExists = await UserData.findOne({ email }); //equals to {email:email}
      if (checkIfEmailExists) {
        res.status(502).json({
          message: "This email already exists please try another one.",
        });
      } else {
        const createNewUser = new UserData({
          //creating new user
          userName,
          email,
          phone,
          work,
          password,
          cPassword,
        });
        const studentDataSaved = await createNewUser.save(); //saving the created user
        if (studentDataSaved) {
          //checking if the data has saved or not
          res
            .status(200)
            .json({ message: "Your data has benn saved successfully " });
        }
      }
    }
  } catch (error) {
    res.status(502).json({
      error: "Server error please try again",
    });
  }
});

module.exports = Route;
