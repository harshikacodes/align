const express = require("express");

const app = express();

const {adminAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/user", (req, res) => {
    res.send("User Data Sent");
})

app.get("/admin/getAllData", (req, res) => {
    res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("Deleted a user");
});

app.listen(7777, () => {
    console.log("Server is sucessfully listening on port 7777...");
})