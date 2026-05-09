// Requring joi for schema validation
const joi = require('joi');

// creating schema for user registration

const joiUser = joi.object({


        username: joi.string().required(),

        gmail: joi.string().email().required(),

        password: joi.string().required(),

    
});

// exporting the user validation schema

module.exports = {joiUser};
