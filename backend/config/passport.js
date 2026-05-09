// config/passport.js
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');
// const User = require('./models/User.js');

// module.exports = function(passport) {
//     // Login Checking Logic
//     passport.use(
//         new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
//             try {
//                 const user = await User.findOne({ email: email });
//                 if (!user) {
//                     return done(null, false, { message: 'Email not registered!' });
//                 }

//                 const isMatch = await bcrypt.compare(password, user.password);
//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: 'Password incorrect!' });
//                 }
//             } catch (error) {
//                 return done(error);
//             }
//         })
//     );

//     passport.serializeUser((user, done) => done(null, user.id));
    
//     passport.deserializeUser(async (id, done) => {
//         try {
//             const user = await User.findById(id);
//             done(null, user);
//         } catch (error) {
//             done(error);
//         }
//     });
// };