// REQUIRING MODULES PHASE
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
// const flash = require('connect-flash');
const session = require('express-session');
const { log } = require('console');
const LocalStrategy = require('passport-local').Strategy;



require('dotenv').config();

// Middlewares
app.use(cors({ 
    origin: 'http://localhost:5173', // Aapke React app ka URL
    credentials: true // Passport session cookies allow karne ke liye VERY IMPORTANT
}));
app.use(express.json());

// Express Session Middleware (Passport ko kaam karne ke liye ye chahiye)
app.use(session({
    secret: 'mera_secret_key_123', // Ise .env file me rakhna chahiye
    resave: false,
    saveUninitialized: false,
}));
// importing middleware
const User = require('./models/user.js');
const { validateUser} = require('./middlewares/middleware.js');


//passport 
app.use(passport.initialize());
app.use(passport.session());
passport.use( new LocalStrategy(User.authenticate() ));

// for passport.authentica login to cehck user exist in db or not
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// connecting to database and handling connection errors
 async function connectDB(){
    await mongoose.connect(process.env.MONGO_URL);
 }

 connectDB().then(()=>{
    console.log('connected to DB');
 }).catch((err)=>{
    console.log(err);
 })


app.get('/home', (req, res)=>{
      res.send('welcome to home page');
})

// API signup

app.post('/api/signup', validateUser, async(req, res)=>{

   // destructing data from requset
try {
   const{ username, gmail, password} = req.body;

   // console.log(req.body);

   // checking if user already exist in database
   const existingUser = await User.findOne({ email: gmail});

   if(existingUser){
     return res.status(400).json({ message: "user already exist"});
   }

   // saving user to database

   const newUser = new User({
      username: username,
      email: gmail,
   });

   const registeredUser = await User.register(newUser, password);
   console.log('user saved to database');
   res.status(200).json({message:"signup successful" , user: registeredUser});

} catch (error) {
   console.error(error.message);
   return res.status(500).json({ message: "internal server error"});  
}  
});


//api for login

app.post('/api/login', passport.authenticate('local'), (req, res)=>{

   try{
      res.status(200).json({message: "login successful", user: req.user});
   }catch(error){
      if(error.resonse && error.response.data){
         console.log("🔥 ASLI ERROR YAHAN HAI:", error.response.data);
         return res.status(400).json({message: error.response.data.message || "Login failed!"});
      }
      console.error(error.message);
      res.status(500).json({message: "internal server error"});
   }

 
   });


// port
const port = process.env.PORT;

app.listen(port, () => {

    console.log(`server is running at ${port}`);
    
})
