const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
    // creating a new instance of the User model
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User added successfully!");
    } catch (err) {
        res.status(400).send("Error in saving the user: " + err.message);
    }
});

connectDB()
    .then(() => {
        console.log("Database connection established...");
        app.listen(7777, () => {
            console.log("Server is sucessfully listening on port 7777...");
        })
    })
    .catch((err) => {
        console.error("Database cannot be connected!!");
    });

