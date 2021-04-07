const express = require("express");
const bcrypt = require("bcrypt");
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
    const {
      name: userName,
      email,
      phone,
      work,
      password,
      cPassword,
    } = req.body; //destructuring
    if (!userName || !email || !phone || !work || !password || !cPassword) {
      /*checking for null values */
      res.status(422).json({
        message: "Please fillout every field properly.",
      });
    } else if (password !== cPassword) {
      res.status(502).json({
        message: "Passwords are not matching",
      });
    } else {
      const checkIfEmailExists = await UserData.findOne({
        email,
      }); //equals to {email:email}
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
        //calling the schema.pre middleware to encrypt the password goto schema and see the middleware
        const studentDataSaved = await createNewUser.save(); //saving the created user
        if (studentDataSaved) {
          //checking if the data has saved or not
          res.status(200).json({
            message: "Your data has been saved successfully ",
          });
        }
      }
    }
  } catch (error) {
    res.status(502).json({
      error: "Server error please try again",
    });
  }
});

//creating a login system
Route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({
        message: "Please fill out the fields properly.",
      });
    } else {
      try {
        const checkIfUserExists = await UserData.findOne({
          email,
        }); //checking if given email exists in database or not

        const { password: userPassword, cPassword } = checkIfUserExists; //destruccturing
        const compareHashPassword =
          (await bcrypt.compare(password, userPassword)) ||
          password === cPassword; //using the shortCircuit method

        if (checkIfUserExists && compareHashPassword) {
          //generting web tokens createWebToken method is dfined inside schema
          let userToken = await checkIfUserExists.createWebTokenForUser();
          //storing the Webtoken in the cokie taka ham bad me comparision karwasaky
          res.cookie("jsonWebToken", userToken, {
            expires: new Date(Date.now() + 50000),
            httpOnly: true,
          });

          //if emaill exist and password is true
          // res.status(200).json({
          //   message: "Login Successfull.",
          // });
          res.status(200).json({
            message: "Logged In Successfully",
          });
        } else {
          res.status(502).json({
            message: "Email or password is incorrect -> Pass. ",
          }); //if password is incorrect
        }
      } catch (error) {
        res.status(502).json({
          message: "Email or password is incorrect -> Email.",
        }); //if Email doest exists
      }
    }
  } catch (error) {
    res.status(502).json({
      message: "Internal server error for Login ",
    });
  }
});
module.exports = Route;
