/* 
Mongoose Schema vs. Model. A Mongoose model is a wrapper on the Mongoose schema.
 A Mongoose schema defines the structure of the document, default values, validators, etc.,
 whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
*/

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//creating the schema for userData schema matlab data kis shape ma para hua hoga like sql ma taables ka ander kon  fields hote h wasa
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "User Name is required"],
    minLength: [1, "User Name can't be less then 4 characters"],
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
    minLength: [4, "Password can't be less then 4 characters"],
    trim: true,
  },
  cPassword: {
    type: String,
    required: [true, "Password is required"],
    minLength: [4, "Password can't be less then 6 characters"],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
    },
  ],
  //tokens is array of objects becoz user can login multiple times isleya jab b woh login kry ga uska leya 1 token generate hoga or wo tokens ma save hoga
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//middleware hamesha modle banay sa phly call hogy wrna app kam to theak kry ga lakin iscase my hash nhi hoga just simple save hoga
// making a hash for password
//next ka parameter hona lazmii ma yahe to batai ga middleware ko ka next kya execute krna ha iscase ma next save() methods ko call kry ga
userSchema.pre("save", async function (next) {
  //userData.save() methods ko call krny sa phly => userschema.pre("kis_method_ko_exe_krny_sa_pahly -> save", async function(){})
  //har save hony sa pahly pre middle ware challyga ab ham middleware ko ham speacifically bata rhy h ka agr passwprd modilfy ho to usko hash kro  bs
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cPassword = await bcrypt.hash(this.cPassword, 12);
  }
  next(); //will call the save() method
});

//creating a webToken for user
userSchema.methods.createWebTokenForUser = async function () {
  try {
    //jwt.sign() =>contains thre parameters encryptiontype(optional{sha325,}),Payload(must be unique for everyUser=> {id,nameetc}),SecretKey(ny known to you)
    const generatedTokenForUser = jwt.sign(
      {
        // ya sara data user ka isleya payload ma rakha h taka user ko achy sa identify keya ja saky wana sirf ap id b rakh sakty thy magr hona unique chaheya payload
        _id: this.id,
        date: this.date,
        email: this.email,
        name: this.name,
      },
      process.env.SECRET__KEY
    ); //generating the user token

    //adding the token to tokens field
    this.tokens = this.tokens.concat({
      token: generatedTokenForUser,
    });
    // console.log(this); this conatain sara data of user

    await this.save(); //this will actually save the generated token inside the token field in userSchema
    return generatedTokenForUser;
  } catch (error) {
    console.log("error while generating the userToken" + error);
  }
};

// saving the user Messsage from contect us form if userIs authentic
userSchema.methods.saveUsersMessage = async function (message) {
  try {
    console.log("In user MEssages");
    this.messages = this.messages.concat({ message });
    await this.save();
    return this.messages;
  } catch (error) {
    console.log(error);
  }
};
//creating model mtlab single user ka data {name:"sdsd",age:"etc"..etc}
const UsersData = mongoose.model("usersData", userSchema); //("tablename",schemaname)

//exporting the model to be used in multiple pages
module.exports = UsersData;
