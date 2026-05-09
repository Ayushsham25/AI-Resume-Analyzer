const mongoose = require('mongoose');
const passport = require('passport');
// throw new MongooseError('First param to `schema.plugin()` must be a function, end main .default likh doh
const passportLocalMongoose = require('passport-local-mongoose').default ;
const Schema = mongoose.Schema;
// making user schema

const userSchema = new Schema({
username: {
    type: String,
    required: true,
},

email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
},

// passport local mongoose will use username and password fields by default, so we are using username for email and password for password

},
{timestamps: true,});

userSchema.plugin(passportLocalMongoose, { usernameField: 'username' });

//exporting user model
const User = mongoose.model('User', userSchema);
module.exports = User;