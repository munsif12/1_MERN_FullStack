const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connecting to online mongodb atlas -> u hava to have mongodb installedin your local machine
const DB =
  "mongodb+srv://munsif12:Munsif___69@cluster0.j3nyq.mongodb.net/MERN_FULLSTACK?retryWrites=true&w=majority";
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connection to mongodb atlas successfull");
  }
);

//adding a middle ware mtlab agr koi functionality perofrm krwany sa pahly kuch krwana hoto yani mtlab agr user direclty about page acces krrha h to check kro ka uskaalogin keya h k nhi pahly
//responce ko pany sa pahly agr koi functionality krwanii hoto middle warre use hota ha
//Middleware functions can perform the following tasks: Execute any code. Make changes to the request and the response objects.
const checkLoginMiddleWare = (req, res, next) => {
  console.log("Comming from MiddleWare :- user is logged in ");
  next(); //next na lika to page pending pa rhy ga or ghoomta rhy ga
  //jab middle ware ka kam khtm hojata ha to ham next() ka use excution ko continue krny ka keya krty ha agr next ko call nhi keya to program isemiddle ware ka ander rah jai ga or further execution nhi hota jab tak next na likha to
};

//creating the routes
app.get("/", checkLoginMiddleWare, (req, res) => {
  res.send("hello from the Home page");
});
app.get("/about", (req, res) => {
  res.send("hello from the About Page");
});
//reserving port 8000 to listen for requests
app.listen(8000, () => {
  console.log("listening at port no  8000");
});
