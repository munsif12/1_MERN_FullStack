// Online Database mongoDb atlas
const mongoose = require("mongoose");
//connecting to online mongodb atlas -> u hava to have mongodb installedin your local machine
const Database = process.env.DATABASE__CONN; //to access variables inside dotenv -> config file use process.env.variableName
mongoose
  .connect(Database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connection successfull using MongoDb Atlas..`);
  })
  .catch((error) => {
    mongoose
      .connect("mongodb://localhost:27017/mern", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log(`Connection successfull using uocal Db..`);
      })
      .catch((e) => console.log(`Connection error : ${e}`));
  });
