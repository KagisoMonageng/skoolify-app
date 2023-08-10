const express = require("express");
var cors = require("cors");
require("dotenv").config();
const app = express();

//impot classes
const admin = require("./routes/admin");
const parent = require("./routes/parent");
const account = require("./routes/account");

const  owner = require("./routes/owner");

const {register} = require("./controllers/register");
const {login} = require("./controllers/login");

//impot classes
const vehicle = require("./routes/vehicle");
const {forgotpassword} = require("./controllers/forgotpassword");


var corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });

app.listen(8080, () => {
  console.log("Server running on port 8080");
});

app.get('/',(req,res)=>{
  res.send('<div style="width: 100%; height:100vh; display:flex; flex-direction:column;gap:1rem ; justify-content:center; place-items:center;"> <div style="width:100px; height:100px; background-color: orange; border-radius:50%"></div><h1 style="font-family:sans-serif;padding:0;margin:0;"> Server is running</h1> <p style="padding:0;margin:0;font-family:sans-serif;">Ready to take your requests</p></div>');
})

app.use("/admin", admin);
app.use('/account',account)
app.use('/parent',parent)
app.use('/owner',owner)
app.use("/register", register);
app.use("/login", login);
//app.use("/owner",owner);
app.use("/forgotpassword", forgotpassword);


app.use('/vehicle', vehicle)


