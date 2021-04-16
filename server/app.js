const express = require("express");
const dotenv = require("dotenv");
const app = express();
//cookie parser apka cookies ko reqest ma dalta h ise error ke waja sa 1 project miss hua or aj time b bht laga
var cookieParser = require("cookie-parser");
app.use(cookieParser());
//dotenv ka filePath app ko batanay kaleya
dotenv.config({ path: "./config.env" });
//settingn up connection by requiring the connetion file the connection functionality is performed in connection.js file
require("./db_connection/connection");

//app ko batow ka data json format ma aiy ga agr koi request postman ka zareya hui ha
//app ko batarhy ha ka agr json ka data aiy to usko object ma convert krdo
app.use(express.json()); //ya lines hamesha router ko require wali line sa uper hone chaheya becoz js synchroonous hota h wara mare tarah 20 min waste hongy

//getting the routes for the app like app.get("/",()=>{res.send("hello server")})
app.use(require("./routes/routes"));

//reserving port 8000 to listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Listening at port no ${process.env.PORT}`);
});
