require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const login=require('./Backend/routes/login');

//DB Connection with mongodb
  mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).
  catch((err)=>{console.log(err)});
  
// mongoose
//   .connect(process.env.mongoUrl,
//   { useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true})
//   .then(() => {
//     console.log("DB CONNECTED");
//   }).
//   catch((err)=>{console.log(err)});
  
  

app.use(bodyParser.json());
app.use(cors());

app.use("/api",login);


if(process.env.NODE_ENV==="production")
{
  app.use(express.static("Frontend/build"));
  
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../Frontend","build","index.html"));
  });
}

//PORT
const port = process.env.PORT || 8000;
//Starting a Server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
