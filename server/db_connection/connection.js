const mongoose = require("mongoose");
//connecting to online mongodb atlas -> u hava to have mongodb installedin your local machine
const Database = process.env.DATABASE__CONN; //to access variables inside dotenv -> config file use process.env.variableName
mongoose.connect(
  Database,
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
