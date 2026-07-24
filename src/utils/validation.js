const validator = require("validator");

const validateSignUpData = (req) => {
    const {firstName, lastName, emailId, password} = req.body;

    if(!firstName || !lastName){
        throw new Error("Provide Name");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid!");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a strong Password!");
    }
};

const validateLoginData = (req) => {
    const {emailId} = req.body;
    if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    }
}

module.exports = {validateSignUpData, validateLoginData}